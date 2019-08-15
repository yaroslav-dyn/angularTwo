import { Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {AppSettingsInt, SettingsService} from '../services/settings.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
    tabView: string;
    themeView: boolean;
    currentThemeModel: string;
    objSet: AppSettingsInt = {
      currentTheme: 'defaultTheme',
      themeState: true,
      chartType: 'Line'
    };

  chartTypeSettings = new FormGroup({
    chartType: new FormControl('line'),
  });

  constructor(private usersService: UsersService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.tabView = 'First';

    this.settingsService.getSettings().subscribe( settings => {
      this.patchSettings(settings);
    });
    this.settingsService.updateSettings.subscribe(settings => {
      if (settings) {
        this.patchSettings(settings);
      }
    });
  }

  patchSettings(setObj) {
    console.log('patch obj', setObj);
    this.themeView = setObj.themeState;
    this.currentThemeModel = setObj.currentTheme;
    this.chartTypeSettings.patchValue({
      chartType: setObj.chartType
    });
    console.log(this.chartTypeSettings);
  }

  outputMethodSettings(e, type): void {
    switch (type) {
      case 'themeViewType':
        this.objSet.themeState = e.target.checked;
        break;
      case 'chartTypeType':
        this.objSet.chartType = this.chartTypeSettings.value.chartType;
        break;
      case 'themeType':
        this.objSet.currentTheme = this.currentThemeModel;
    }
     this.settingsService.updateSettings.next(this.objSet);
    this.settingsService.saveSettings(this.objSet);

  }

}

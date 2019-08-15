import { Component, OnInit } from '@angular/core';
import {SettingsService, AppSettingsInt} from '../services/settings.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})


export class HomePageComponent implements OnInit  {
  tabView: String;
  tabViewDefault: String = 'linear';
  settings: AppSettingsInt;

  constructor(private settingsService: SettingsService) {}
  ngOnInit() {


    this.tabView = this.tabViewDefault;

    this.settingsService.getSettings().subscribe(settings => {
      this.settings = settings;
      this.tabView = this.settings.chartType;
    });

    // this.settingsService.updateSettings.subscribe(settings => {
    //   this.settings = settings;
    // });

  }
}



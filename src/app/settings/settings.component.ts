import { Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {SettingsService} from '../services/settings.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


    countUsers: number;
    tabView: string;
    themeView: boolean | string;

  chartTypeSettings = new FormGroup({
    chartType: new FormControl('line'),
      });

  constructor(private usersService: UsersService,
              private settingsService: SettingsService) { }

  ngOnInit() {

    this.themeView = JSON.parse(localStorage.getItem('themeState'));
    this.usersService.setSize(this.countUsers);
    this.countUsers = this.usersService.size;
    this.tabView = 'First';
    this.settingsOnChanges();
  }


  settingsOnChanges() {
    this.chartTypeSettings.valueChanges.subscribe( val => {
      this.settingsService.updateSettings(val);
    });
  }

  onChNumbersUsers() {
    this.usersService.setSize(this.countUsers);
  }

  outputMethodSettings(e) {
    this.themeView = e.target.checked;
    this.settingsService.myData.next(this.themeView);
    if (localStorage) {
      localStorage.setItem('themeState', this.themeView.toString() );
    }
  }

}

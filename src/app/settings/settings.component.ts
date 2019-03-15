import { Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {SettingsService} from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


    countUsers: number;
    tabView: string;
    themeView: boolean | string;


  constructor(private usersService: UsersService,
              private settingsService: SettingsService) { }

  ngOnInit() {

    this.countUsers = this.usersService.size;
    this.tabView = 'First';

    this.settingsService.myData.next(this.themeView);
  }

  onChNumbersUsers() {
    this.usersService.setSize(this.countUsers);
  }

  outputMethodSettings() {
    this.settingsService.myData.next(this.themeView);
    if (localStorage) {
      localStorage.setItem('themeState', this.themeView.toString() );
    }
  }

}

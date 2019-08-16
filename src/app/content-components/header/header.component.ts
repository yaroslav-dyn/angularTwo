import { Component, OnInit } from '@angular/core';

import {AppSettings, SettingsService} from '../../services/settings.service';
import {ConstantList} from '../../constants';
import {LoginService} from '../../services/login.service';
import {LoggedState} from '../../services/loggedUser';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  defaultTheme = 'defaultTheme';
  currentTheme: string = this.defaultTheme;
  showTheme: boolean | string = true;
  loginUser: boolean;
  settings: AppSettings;


  constructor(private settingsService: SettingsService,
              private constantList: ConstantList,
              private loginService: LoginService,
              private loggedStateService: LoggedState,
              private rootRouter: Router) { }

  ngOnInit() {


    this.settingsService.getSettings().subscribe(settings => {
      this.patchSettings(settings);
    });

    this.settingsService.updateSettings.subscribe(settings => {
      if (settings) {
        this.patchSettings(settings);
      }
    });


    this.loggedStateService.loggedState.subscribe(loggState => {
        if (loggState != null) {
          this.loginUser = loggState;
        }
    });
    this.loginUser = this.loginService.checkLogin();

  }
  patchSettings(setObj) {
    this.settings = setObj;
    this.currentTheme = setObj.currentTheme;
    this.showTheme = setObj.themeState;
  }
  setTheme(e) {
    this.settings.currentTheme = this.currentTheme;
    this.settingsService.updateSettings.next(this.settings);
  }

  loggedOut() {
    this.loginService.logOut();
  }

}

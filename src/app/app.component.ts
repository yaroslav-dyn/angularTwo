import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {SettingsService} from './services/settings.service';
import {ConstantList} from './constants';
import {LoginService} from './services/login.service';
import {LoggedState} from './services/loggedUser';
import {Router} from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    currentTheme: string;
    defaultTheme = 'defaultTheme';
    showTheme: boolean | string;
    loginUser: boolean;
    constructor(private settingsService: SettingsService,
                private constantList: ConstantList,
                private loginService: LoginService,
                private loggedStateService: LoggedState,
                private rootRouter: Router
    ) { }
    ngOnInit() {
        this.currentTheme = this.defaultTheme;
        this.settingsService.myData.subscribe(colorTheme => {
          this.showTheme = colorTheme;
        });

      if ( localStorage ) {
        const storageThemeVal = JSON.parse(localStorage.getItem('themeState'));
        if ( storageThemeVal ) { this.showTheme = storageThemeVal; }
        this.currentTheme = localStorage.getItem('currentTheme');
      }

      this.loginUser = this.loginService.checkLogin();

      this.loggedStateService.loggedState.subscribe(loggedStatus => {
        if ( loggedStatus ) {
          this.loginUser = loggedStatus;
        }
      });
    }
    setTheme(e) {
        this.currentTheme = e;
      if (localStorage) {
            localStorage.setItem('currentTheme', this.currentTheme);
        }
    }
    loggedOut () {
      sessionStorage.removeItem('loggedUser');
      this.loginUser = false;
      this.rootRouter.navigate(['/signIn']);
    }
}




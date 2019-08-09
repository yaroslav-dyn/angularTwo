import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {SettingsService} from './services/settings.service';
import {ConstantList} from './constants';
import {LoginService} from './services/login.service';
import {LoggedState} from './services/loggedUser';
import {Router} from '@angular/router';
import {LoaderState} from './content-components/loader/loader.model';
import {LoaderService} from './services/preload.service';
import {Subscription} from 'rxjs';


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
  requestInProgress = false;
  private subscription: Subscription;
  constructor(private settingsService: SettingsService,
                private constantList: ConstantList,
                private loginService: LoginService,
                private loggedStateService: LoggedState,
                private rootRouter: Router,
                private loaderService: LoaderService
    ) {}
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




      this.subscription = this.loaderService.loaderState
        .subscribe((state: LoaderState) => {
          this.requestInProgress = state.show;
        });

        this.loggedStateService.loggedState.subscribe( loggState => {
            this.loginUser = loggState;
        });
        this.loginUser = this.loginService.checkLogin();
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




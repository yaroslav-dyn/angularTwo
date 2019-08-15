import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {AppSettingsInt, SettingsService} from './services/settings.service';
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
  defaultTheme = 'defaultTheme';
  currentTheme: string = this.defaultTheme;
  showTheme: boolean | string = true;
  loginUser: boolean;
  requestInProgress = false;
  settings: AppSettingsInt;
  private subscription: Subscription;

  constructor(private settingsService: SettingsService,
              private constantList: ConstantList,
              private loginService: LoginService,
              private loggedStateService: LoggedState,
              private rootRouter: Router,
              private loaderService: LoaderService
  ) {
  }

  ngOnInit() {
    // this.currentTheme = this.defaultTheme;

    this.settingsService.getSettings().subscribe(settings => {
      this.settings = settings;
      this.currentTheme = this.settings.currentTheme;
      this.showTheme = this.settings.themeState;
    });

    this.settingsService.updateSettings.subscribe(settings => {
      if (settings) {
        this.showTheme = settings.themeState;
        this.currentTheme = settings.currentTheme;
      }

    });

    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.requestInProgress = state.show;
      });

    this.loggedStateService.loggedState.subscribe(loggState => {
      this.loginUser = loggState;
    });
    this.loginUser = this.loginService.checkLogin();

  }

  setTheme(e) {
    this.settings.currentTheme = this.currentTheme;
    this.settingsService.updateSettings.next(this.settings);
  }

  loggedOut() {
    sessionStorage.removeItem('loggedUser');
    this.loginUser = false;
    this.rootRouter.navigate(['/signIn']);
  }
}




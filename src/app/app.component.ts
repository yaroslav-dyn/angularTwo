import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {SettingsService} from "./settings.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [UsersService]
})
export class AppComponent implements OnInit {

    currentTheme: string;
    defaultTheme = 'defaultTheme';
    showTheme: boolean | string;


    constructor(private settingsService: SettingsService) { }

    ngOnInit() {

        this.currentTheme = this.defaultTheme;

        if (localStorage ) {

         let storageThemeState =  localStorage.getItem('themeState');

          if (storageThemeState) {
            this.showTheme = storageThemeState;
          }
          else {
            this.settingsService.myData.subscribe(colorTheme => {
              this.showTheme = colorTheme;
            });
          }

          this.currentTheme = localStorage.getItem('currentTheme');
        }
        this.settingsService.myData.subscribe(colorTheme => {
          this.showTheme = colorTheme;
        });

    }

    setTheme(e) {
        this.currentTheme = e;
      if (localStorage) {
            localStorage.setItem('currentTheme', this.currentTheme);
        }
    }

}


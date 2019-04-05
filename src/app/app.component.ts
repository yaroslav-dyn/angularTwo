import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {SettingsService} from "./settings.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    project  = {
      name: 'Bboxes'
    };
    currentTheme: string;
    defaultTheme = 'defaultTheme';
    showTheme: boolean | string;


    constructor(private settingsService: SettingsService) { }

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


    }

    setTheme(e) {
        this.currentTheme = e;
      if (localStorage) {
            localStorage.setItem('currentTheme', this.currentTheme);
        }
    }

}




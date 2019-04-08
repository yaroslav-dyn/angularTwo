import {Component, Input, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {SettingsService} from './settings.service';
import {ConstantList} from './constants';0


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    currentTheme: string;
    defaultTheme = 'defaultTheme';
    showTheme: boolean | string;



    constructor(private settingsService: SettingsService, private constantList: ConstantList) { }

    ngOnInit() {


      console.log(this.constantList.project);

        this.currentTheme = this.defaultTheme;


        this.settingsService.myData.subscribe(colorTheme => {
          this.showTheme = colorTheme;
        });

      if ( localStorage ) {
        const storageThemeVal = JSON.parse(localStorage.getItem('themeState'));
        if ( storageThemeVal ) { this.showTheme = storageThemeVal; }
        this.currentTheme = localStorage.getItem('currentTheme');
      }

      let elems = document.querySelectorAll('.sidenav');
      let instances = M.Sidenav.init(elems);
    }

    setTheme(e) {
        this.currentTheme = e;
      if (localStorage) {
            localStorage.setItem('currentTheme', this.currentTheme);
        }
    }


}




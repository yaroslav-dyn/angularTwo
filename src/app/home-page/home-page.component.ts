import { Component, OnInit } from '@angular/core';
import {SettingsService} from '../services/settings.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  tabView: String;
  tabViewDefault: String = 'linear';
  constructor(private settingsService: SettingsService) {}
  ngOnInit() {
    interface UserObj { name: string; secondName: string; nickName?: string; }
    let userObj: UserObj = {
      name: 'User',
      secondName: 'Super',
      nickName: 'superUser'
    };

    this.tabView = this.tabViewDefault;

    this.settingsService.myData.subscribe(chartType => {

      chartType ? this.tabView = chartType : this.tabView = this.tabViewDefault;
    });

  }
}



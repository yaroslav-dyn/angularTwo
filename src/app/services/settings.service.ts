import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


export class AppSettings {
  // simple settings object
  appSettings: AppSettingsInt  =  {
    currentTheme: 'Default',
    themeState: true,
    chartType: 'Line'
  };
}

const SETTINGS_KEY = 'configuration';

export interface AppSettingsInt {
  currentTheme?: string; themeState?: boolean; chartType?: string;
}

@Injectable()
export class SettingsService {
public updateSettings: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}

   getSettings(): Observable<AppSettings> {
    let settings = localStorage.getItem(SETTINGS_KEY);
    return Observable.of<AppSettings>( JSON.parse(settings) );
  }

  saveSettings(settings: AppSettingsInt) {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }

}

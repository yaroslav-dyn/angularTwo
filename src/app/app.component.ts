import { Component } from '@angular/core';
import {UsersService} from './users.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [UsersService]
})
export class AppComponent {

    currentTheme: string;
    defaultTheme: string;
    defaultTheme: string;
    defaultTheme = 'defaultTheme';
    constructor() { }
    ngOnInit() {

        this.currentTheme = this.defaultTheme;

        if (localStorage) {
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


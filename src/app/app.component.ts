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
    purpleTheme = 'purple-them';

    constructor() { }
    ngOnInit() {
        this.defaultTheme = this.purpleTheme;

        this.currentTheme = this.defaultTheme;

    }

    // setTheme(valTheme): {
    //
    // }


}

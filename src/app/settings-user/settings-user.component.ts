import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-user',
  templateUrl: './settings-user.component.html',
  styleUrls: ['./settings-user.component.scss']
})
export class SettingsUserComponent implements OnInit {

  childVar: string = 'Child String';

  checkChild() {
    console.log('Child method');
  }

  constructor() { }

  ngOnInit() {

  }

}

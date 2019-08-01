import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  tabView: String = 'linear';
  constructor() {}
  ngOnInit() {
    interface UserObj { name: string; secondName: string; nickName?: string; }
    let userObj: UserObj = {
      name: 'User',
      secondName: 'Super',
      nickName: 'superUser'
    };
  }
}



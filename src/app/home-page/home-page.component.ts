import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  users = [];
  searchStr = '';
  constructor(private usersService: UsersService) {}
  ngOnInit() {
      this.usersService.getUser().subscribe(users => {
          this.users = users;
      });
  }
}



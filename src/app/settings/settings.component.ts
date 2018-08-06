import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


    countUsers: number;

  constructor(private usersService: UsersService) { }

  ngOnInit() {

    this.countUsers = this.usersService.size;

  }

  onChNumbersUsers() {
    this.usersService.setSize(this.countUsers);
  }

}

import { Component } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {

    users = [];
    searchStr = '';

  isMarked = false;

    constructor(private usersService: UsersService) {}
    ngOnInit() {
        this.usersService.getUser().subscribe(users => {
            this.users = users;
        });


    }

  onClickCart() {
      this.isMarked = !this.isMarked;
  }
}

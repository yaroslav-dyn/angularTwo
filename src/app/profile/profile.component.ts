import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import {CurrUserModel} from './currentUser.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  currentUserRandom: number;


  constructor(private loginService: LoginService) {
    this.currentUser  = new CurrUserModel();
    this.currentUserRandom = Math.floor(Math.random() * 10) + 1;
    this.loginService.getCurrentUser( this.currentUserRandom).subscribe( (currUser) => {
      this.currentUser = currUser;
    }, Error =>  {
      console.log('error', Error.error);
      console.log(Error.error.message, `Backend returned code ${Error.status}, body was: ${Error.error}`);
    });
  }

  ngOnInit() {
  }
}

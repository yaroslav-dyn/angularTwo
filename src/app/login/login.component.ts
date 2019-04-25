import { Component, OnInit } from '@angular/core';
import {UserModel} from '../registration/User.model';
import {ConstantList} from '../constants';
import {LoginService} from '../services/login.service';
import { Router } from '@angular/router';
import {LoggedState} from '../services/loggedUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  route: any;

  private user: UserModel;

  logUser: {password: string, email: string} = {
    password: '',
    email: ''
  };


  constructor(private constantList: ConstantList,
              private loginService: LoginService,
              private routeLogin: Router,
              private loggedStateService:  LoggedState
  ) { }

  ngOnInit() {
    this.user = new UserModel({
      email: '', password: {pwd: ''},
    });

  }

  completeLogin(result) {
    sessionStorage.setItem('loggedUser', result.token);
    this.loggedStateService.loggedState.next(true);
    this.routeLogin.navigate(['profile']);
  }

  public onFormSubmit({ value}: { value: UserModel}) {

    this.logUser = {
      email: value.email,
      password: value.password.pwd
    };
    this.loginService.loginUser(this.logUser).subscribe((res) => {
      this.completeLogin(res);
    }, Error => {
      console.log('error', Error.error);
      console.log(Error.error.message, `Backend returned code ${Error.status}, body was: ${Error.error}`);
    });
  }

}

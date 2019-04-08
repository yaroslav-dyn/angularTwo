import { Component, OnInit } from '@angular/core';
import {UserModel} from '../registration/User.model';
import {ConstantList} from "../constants";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: UserModel;

  constructor(private constantList: ConstantList) { }

  ngOnInit() {
    this.user = new UserModel({
      email: '', password: {pwd: ''},
    });

  }

  public onFormSubmit({ value, valid}: { value: UserModel, valid: boolean }) {
    this.user = value;
    console.log( this.user);
    console.log("valid: " + valid);
  }

}

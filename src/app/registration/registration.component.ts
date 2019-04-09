import {Component, OnInit} from '@angular/core';
import {UserModel} from './User.model';
import {ConstantList} from '../constants';
import {RegisterService} from "../services/register.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private user: UserModel;
    users = [];
    regUser = {
      password: '',
      email: ''
    };

  constructor(private constantList: ConstantList, private registerService: RegisterService ) {

  }

  ngOnInit() {
    this.user = new UserModel({
      email: '', password: {pwd: '', confirm_pwd: ''},
      terms: false
    });


  }


  public onFormSubmit({ value, valid}: { value: UserModel, valid: boolean }) {
    this.regUser.email = value.email;
    this.regUser.password  = value.password.pwd;


    console.log( this.regUser);

    this.registerService.registerUser(this.regUser).subscribe((res) => {
        console.log('create customer', res);
      });

  }

}

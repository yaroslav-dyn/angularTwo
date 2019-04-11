import {Component, OnInit} from '@angular/core';
import {UserModel} from './User.model';
import {ConstantList} from '../constants';
import {RegisterService} from '../services/register.service';
import {MzToastService} from 'ngx-materialize';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private user: UserModel;

    regUser: {password: string, email: string} = {
      password: '',
      email: ''
    };

  constructor(
    private constantList: ConstantList,
    private registerService: RegisterService,
    private toastService: MzToastService,
    private routeReg: Router) {

  }

  ngOnInit() {
    this.user = new UserModel({
      email: '', password: {pwd: '', confirm_pwd: ''},
      terms: false
    });

  }

  completeRegister(result) {
    this.routeReg.navigate(['signUp/thanks']);
    localStorage.setItem('currentUser', result.token);
  }

  public onFormSubmit({ value, valid}: { value: UserModel, valid: boolean }) {
    this.regUser = {
      email: value.email,
      password: value.password.pwd
    };

    const Messages: any = this.constantList.messages;

    this.registerService.registerUser(this.regUser).subscribe((res) => {

          this.completeRegister(res);
          this.toastService.show(Messages['haveBeenRegister'] + ' ' + this.constantList.project.name, 60000, 'bb-toast success');

    }, Error => {
      console.log('error', Error.error);
    });

  }

}//

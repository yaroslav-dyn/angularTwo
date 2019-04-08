import {Component, OnInit} from '@angular/core';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {UserModel} from './User.model';
import {ConstantList} from '../constants';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private user: UserModel;


  constructor(private constantList: ConstantList) {
  }

  ngOnInit() {
    this.user = new UserModel({
      email: '', password: {pwd: '', confirm_pwd: ''},
      terms: false
    });

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);

  }


  public onFormSubmit({ value, valid}: { value: UserModel, valid: boolean }) {
    this.user = value;
    console.log( this.user);
    console.log("valid: " + valid);
  }



}

import { Injectable } from '@angular/core';

@Injectable()
export class ConstantList {

  project: any =  {
    name: 'Bboxes',
    baseUrl : 'https://reqres.in/api/',
    toasterDelay: 6000
  };

  // TODO: test user for this API
  loginUser = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  };
  registerUser = {
    email: 'eve.holt@reqres.in',
    password: 'pistol'
  };

  messages: any = {
    'emailCantBeBlank': 'Email field can\'t be blank',
    'wrongEmailPattern': 'The email doesn\'t seem right',
    'passwordLengthError': 'Password needs to be more than 6 characters',
    'passwordsDontMatch': 'Passwords don\'t match',
    'haveBeenRegister': 'You have been registered on',
    'haveProblemWithApi': 'Oops! Maybe we have problem with API'
  };
}

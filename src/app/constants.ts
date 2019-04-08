import { Injectable } from '@angular/core';

@Injectable()
export class ConstantList {

  project: any =  {
    name: 'Bboxes'
  };

  messages: any = {
    'emailCantBeBlank': 'Email field can\'t be blank',
    'wrongEmailPattern': 'The email id doesn\'t seem right',
    'passwordLengthError': 'Password needs to be more than 8 characters',
    'passwordsDontMatch': 'Passwords don\'t match'
  };

}

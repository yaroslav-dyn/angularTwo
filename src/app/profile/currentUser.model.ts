export class CurrUserModel {
  id?: number;
  firstName: string;
  lastName: string;
  constructor(values: Object = {}) {
    // Constructor initialization
    Object.assign(this, values);
  }

}


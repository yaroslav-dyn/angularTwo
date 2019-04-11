
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ConstantList} from '../constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class LoginService {
  _baseUrl: string;

  constructor(private httpClient: HttpClient, private constantList: ConstantList) {
  }

  loginUser(user) {
    this._baseUrl = this.constantList.project.baseUrl;
    return this.httpClient.post(this._baseUrl + 'login', user, httpOptions);

  }

  checkLogin() {
    return sessionStorage.getItem('loggedUser') !== null;
  }

}





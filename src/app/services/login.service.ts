
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ConstantList} from '../constants';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class LoginService {
  _baseUrl: string;

  constructor(private httpClient: HttpClient, private constantList: ConstantList) {
  }

  loginUser(user) {
    user = this.constantList.loginUser;
    this._baseUrl = this.constantList.project.baseUrl;
    return this.httpClient.post(this._baseUrl + 'login', user, httpOptions);

  }

  getCurrentUser(userID) {
    this._baseUrl = this.constantList.project.baseUrl;
    return this.httpClient.get(this._baseUrl + 'users' + '/' +  userID)
     .map(currUser => currUser['data']);
  }

  checkLogin() {
    return sessionStorage.getItem('loggedUser') !== null;
  }

}


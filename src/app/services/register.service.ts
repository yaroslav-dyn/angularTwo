
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RegisterService {

  constructor(private httpClient: HttpClient) {
  }

  registerUser() {
    return this.httpClient.post('https://reqres.in/api/register', httpOptions);
  }
}





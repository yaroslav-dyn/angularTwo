
import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClientService {

    constructor(private httpClient: HttpClient) {
    }

    // Uses http.get() to load data from a single API endpoint
    getClients() {
        return this.httpClient.get('https://randomuser.me/api?inc=gender,name,picture,location&results=8&nat=gb')
            .map(clients => clients['results'])
            .map(clients => {
                return clients.map(el => {
                    return {
                        name: el.name.first + ' ' + el.name.last,
                        img: el.picture.large,
                        geo: el.location.city + ' ' + el.location.state + ' ' + el.location.street
                    };
                });
            });

    }
}





import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

    size = 8;

    constructor(private httpClient: HttpClient) {
    }

    getUser() {
        return this.httpClient.get('https://randomuser.me/api?inc=gender,name,picture,location&results=8&nat=gb')
            .map(users => users['results'])
            .map(users => {
                return users.map(el => {
                    return {
                        name: el.name.first + ' ' + el.name.last,
                        img: el.picture.large,
                        geo: el.location.city + ' ' + el.location.state + ' ' + el.location.street
                    };
                });
            });
    }

    setSize(size) {
        this.size = size;
    }
}




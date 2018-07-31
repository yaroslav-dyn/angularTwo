import { Component, OnInit } from '@angular/core';
import {ClientService} from '../client-next.service';


@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss']
})
export class SetupPageComponent implements OnInit {

    clientsObj = {};
    constructor(private clientsService: ClientService) {}
    ngOnInit() {
        this.clientsService.getClients().subscribe(clients => {
            this.clientsObj = clients.result;
            console.log(this.clientsObj);
        });
    }
}

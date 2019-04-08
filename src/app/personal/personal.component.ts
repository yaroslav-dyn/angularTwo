import { Component, OnInit, Input } from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
    users = [];
    currId = null;
    currIdFinal = null;
    constructor(private usersService: UsersService, private route: ActivatedRoute) {
        this.route.params.subscribe( params =>  this.currId = params );
    }
    ngOnInit() {
        this.usersService.getUser().subscribe(users => {
            this.users = users;
        });
        this.currIdFinal = parseFloat(this.currId.id);

    }
}




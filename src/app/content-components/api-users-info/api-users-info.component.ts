import { Component, OnInit } from '@angular/core';
import {ConstantList} from '../../constants';

@Component({
  selector: 'app-api-users-info',
  templateUrl: './api-users-info.component.html',
  styleUrls: ['./api-users-info.component.scss']
})
export class ApiUsersInfoComponent implements OnInit {

  constructor(private constantList: ConstantList) { }

  ngOnInit() {

  }

}

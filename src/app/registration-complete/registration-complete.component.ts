import { Component, OnInit } from '@angular/core';
import {ConstantList} from "../constants";

@Component({
  selector: 'app-registration-complete',
  templateUrl: './registration-complete.component.html',
  styleUrls: ['./registration-complete.component.scss']
})
export class RegistrationCompleteComponent implements OnInit {

  constructor(private  constantList: ConstantList) { }

  ngOnInit() {
  }

}

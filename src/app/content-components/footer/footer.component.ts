import { Component, OnInit } from '@angular/core';
import {ConstantList} from '../../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  logo: String;
  constructor(private constantList: ConstantList) { }

  ngOnInit() {
  }

}

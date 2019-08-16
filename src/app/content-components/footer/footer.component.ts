import {Component, Input, OnInit} from '@angular/core';
import {ConstantList} from '../../constants';
import {LoginService} from '../../services/login.service';
import {LoggedState} from '../../services/loggedUser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})



export class FooterComponent implements OnInit {
  private loginUser: boolean;
  constructor(private constantList: ConstantList,
              private loggedStateService: LoggedState,
              private loginService: LoginService) { }

  ngOnInit() {

    this.loggedStateService.loggedState.subscribe(loggState => {
      this.loginUser = loggState;
    });
    this.loginUser = this.loginService.checkLogin();
  }

  loggedOut() {
    this.loginService.logOut();
  }
}

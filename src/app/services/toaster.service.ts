import {Injectable} from '@angular/core';
import {ConstantList} from '../constants';
import {MzToastService} from 'ngx-materialize';


@Injectable()
export class ToasterService {

  Messages: any = this.constantList.messages;
  Const: any = this.constantList;
  Toaster: any = this.toasterService;
  constructor(private constantList: ConstantList, private toasterService: MzToastService) {}
  showToast(mes, type) {
    this.Toaster.show(this.Messages[mes] , this.Const.project.toasterDelay, 'bb-toast ' + type);
  }

}

import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MzButtonModule, MzInputModule, MzModalModule, MzCheckboxModule, MzSidenavModule } from 'ngx-materialize';


@NgModule({
  imports: [
    CommonModule,
    MzButtonModule,
    MzInputModule,
    MzModalModule,
    MzCheckboxModule,
    MzSidenavModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzModalModule,
    MzCheckboxModule,
    MzSidenavModule
  ]
})
export class MatterModule { }

import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MzButtonModule,
  MzInputModule,
  MzModalModule,
  MzCheckboxModule,
  MzSidenavModule,
  MzToastModule
} from 'ngx-materialize';


@NgModule({
  imports: [
    CommonModule,
    MzButtonModule,
    MzInputModule,
    MzModalModule,
    MzCheckboxModule,
    MzSidenavModule,
    MzToastModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzModalModule,
    MzCheckboxModule,
    MzSidenavModule,
    MzToastModule
  ]
})
export class MatterModule { }

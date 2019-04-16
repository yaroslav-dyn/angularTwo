import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MzButtonModule,
  MzInputModule,
  MzModalModule,
  MzCheckboxModule,
  MzSidenavModule,
  MzToastModule, MzCardModule, MzSwitchModule
} from 'ngx-materialize';


@NgModule({
  imports: [
    CommonModule,
    MzButtonModule,
    MzInputModule,
    MzModalModule,
    MzCheckboxModule,
    MzSidenavModule,
    MzToastModule,
    MzCardModule,
    MzSwitchModule
  ],
  exports: [
    MzButtonModule,
    MzInputModule,
    MzModalModule,
    MzCheckboxModule,
    MzSidenavModule,
    MzToastModule,
    MzCardModule,
    MzSwitchModule
  ]
})
export class MatterModule { }

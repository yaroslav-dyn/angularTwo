import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearChartComponent } from './charts-components/linear-chart/linear-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LinearChartComponent
  ],
  declarations: [LinearChartComponent]
})
export class ChartsJsModule { }



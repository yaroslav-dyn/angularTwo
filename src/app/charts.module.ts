import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearChartComponent } from './charts-components/linear-chart/linear-chart.component';
import { BarChartComponent } from './charts-components/bar-chart-component/bar-chart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LinearChartComponent,
    BarChartComponent
  ],
  declarations: [LinearChartComponent, BarChartComponent]
})
export class ChartsJsModule { }



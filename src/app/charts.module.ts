import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinearChartComponent } from './charts-components/linear-chart/linear-chart.component';
import { BarChartComponent } from './charts-components/bar-chart-component/bar-chart.component';
import { PieChartComponent } from './charts-components/pie-chart/pie-chart.component';
import {ChartsDataService} from './services/charts-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LinearChartComponent,
    BarChartComponent,
    PieChartComponent
  ],
  declarations: [LinearChartComponent, BarChartComponent, PieChartComponent],
  providers: [ChartsDataService]
})
export class ChartsJsModule { }



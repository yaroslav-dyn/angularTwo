import {Component, Input, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
import {ChartsDataService} from '../../services/charts-data.service';

@Component({
  selector: 'app-linear-chart',
  template: `<div>
                <h4>{{ chartHeading }}</h4>
            </div>
            <div>
                <canvas id='lineChartEl' >{{ chart }}</canvas>
            </div>`,
  styleUrls: ['./linear-chart.component.scss']
})
export class LinearChartComponent implements OnInit {
    private chart;
    @Input() chartRef;
    @Input() datasets;
    @Input() labels;
    @Input() chartHeading;
    @Input() chartOptions;
  constructor(private chartsDataService: ChartsDataService) { }
  ngOnInit() {
    this.chart = this.chartsDataService.getChartData(this.chartRef, this.datasets, this.labels, this.chartOptions);
  }

}

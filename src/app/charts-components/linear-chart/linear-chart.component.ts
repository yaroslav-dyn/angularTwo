import {Component, Input, OnInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-linear-chart',
  template: `<div>
                <h4>{{ chartHeading }}</h4>
            </div>
            <div>
                <canvas id="lineChartEl">{{ chart }}</canvas>
            </div>`,
  styleUrls: ['./linear-chart.component.scss']
})
export class LinearChartComponent implements OnInit {

    private chart;
    @Input() datasets;
    @Input() labels;
    @Input() chartHeading;
    @Input() chartOptions;
  constructor() { }
  ngOnInit() {
    this.chart = new Chart('lineChartEl', {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.chartOptions
    });
  }

}

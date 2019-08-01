import {Component, Input, OnInit} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  template: `<div>
                <h4>{{ chartHeading }}</h4>
            </div>
            <div>
                <canvas id="barChartEl">{{ chart }}</canvas>
            </div>`,
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  private chart;
  @Input() datasets;
  @Input() labels;
  @Input() chartHeading;
  @Input() chartOptions;
  constructor() { }
  ngOnInit() {
    this.chart = new Chart('barChartEl', {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.chartOptions
    });
  }

}

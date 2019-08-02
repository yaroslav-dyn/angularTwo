import { Component, Input, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-pie-chart',
  template: `
      <div>
          <h4>{{ chartHeading }}</h4>
      </div>
      <div>
          <canvas id="pieChartEl">{{ chart }}</canvas>
      </div>`,
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  private chart;
  @Input() datasets;
  @Input() labels;
  @Input() chartHeading;
  @Input() chartOptions;
  constructor() { }

  ngOnInit() {
    this.chart = new Chart('pieChartEl', {
      type: 'pie',
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: this.chartOptions
    });
  }

}

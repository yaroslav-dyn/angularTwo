import { Injectable } from '@angular/core';
import {Chart} from 'chart.js';


@Injectable()
export class ChartsDataService {

  constructor() { }

  public chart;

  getChartData(chartRef, datasets, labels, chartOptions) {


    this.chart = new Chart(chartRef, {
      type: 'line',
      data: {
        labels: labels,
        datasets: datasets
      },
      options: chartOptions
    });

    return this.chart;

  }

}

import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-landing-line-chart',
  styleUrls: ['./landing-line-chart.component.scss'],
  template: `<div>
              <app-linear-chart
                  [chartRef]="landingChartRef"
                  [chartHeading]="landingChartHeading"
                  [chartOptions]="lineChartOptions"
                  [datasets]="linearDataSets"
                  [labels]="lineChartLabels">
              </app-linear-chart>
            </div>`
})
export class LandingLineChartComponent implements OnInit {

    public landingChartHeading: String =  'Landing Linear chart';
    public landingChartRef: String = 'lineChartEl';
    public linearDataSets: ChartDataSets[] = [
     {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series: A', backgroundColor: '#36a2eb', pointBackgroundColor: '#ff1744', pointRadius: 6}
    ];
    public lineChartOptions: any = {
      legend: {
        display: true
      },
      tooltips: {
        backgroundColor: '#fff',
        titleFontFamily: 'Roboto, sans-serif',
        cornerRadius: 6,
        bodyFontColor: '#444',
        titleFontColor: '#444',
        displayColors: false,
        borderWidth: 1

      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }],
      },
      responsive: true
    };
    public lineChartLabels: Array <string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    constructor() { }

  ngOnInit() {

  }

}

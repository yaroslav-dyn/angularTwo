import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-bar-chart-component-landing',
  template: `<div>
    <app-bar-chart
    [chartHeading]="landingChartHeading"
    [chartOptions]="lineChartOptions"
    [datasets]="linearDataSets"
    [labels]="lineChartLabels"
    ></app-bar-chart>
    </div>`,
  styleUrls: ['./bar-chart-landing.component.scss']
})
export class BarChartLandingComponent implements OnInit {
  public landingChartHeading: String =  'Landing bar chart';
  public linearDataSets: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series: A', backgroundColor: '#64dd17'}
  ];
  public lineChartOptions: any = {
    legend: {
      display: true
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

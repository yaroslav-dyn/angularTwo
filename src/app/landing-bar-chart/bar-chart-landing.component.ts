import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-bar-chart-component-landing',
  templateUrl: './bar-chart-landing.component.html',
  styleUrls: ['./bar-chart-landing.component.scss']
})
export class BarChartLandingComponent implements OnInit {
  public landingChartHeading: String =  'Landing bar chart';
  public linearDataSets: ChartDataSets[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series: A', backgroundColor: '#36a2eb'}
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

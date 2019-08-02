import { Component, OnInit } from '@angular/core';
import {ChartDataSets} from 'chart.js';

@Component({
  selector: 'app-landing-pie-chart',
  template: `<div>
                <app-pie-chart
                    [chartHeading]="landingChartHeading"
                    [chartOptions]="lineChartOptions"
                    [datasets]="linearDataSets"
                    [labels]="lineChartLabels">
                </app-pie-chart>
            </div>`,
  styleUrls: ['./landing-pie-chart.component.scss']
})
export class LandingPieChartComponent implements OnInit {
  public landingChartHeading: String =  'Landing Pie chart';
  private pieColors = [
    '#00e676', '#1de9b6', '#ffc400', '#00e5ff', '#00b0ff', '#3d5afe', '#d500f9'
  ];
  public linearDataSets: ChartDataSets[] = [{data: [65, 59, 80, 81, 56, 55, 40], label: 'Series: A', backgroundColor: this.pieColors}];
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

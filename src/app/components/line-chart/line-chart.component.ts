import { Component, ViewChild } from '@angular/core';
import ApexCharts from 'apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  imports: [NgApexchartsModule],
  selector: 'app-line-chart',
  standalone: true,
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'basic',
          data: [375, 222, 171, 89, 75, 62, 42, 25, 14, 8, 7, 0],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          '✈️ Plane',
          '🚗 Car, gas or diesel',
          '🚗 Car, hybrid',
          '🚗 Car, electric, CH electriciy',
          '🚗 Car, electric, eco electriciy',
          '🚌 Bus',
          '🚄 Train (avg. DE, FR, AT, IT)',
          '🚈 Public transport avg. CH',
          '🚲 E-bike',
          '🚲 Bicycle',
          '🚄 Train, CH',
          '🚶 Walking',
        ],
      },
    };
  }
}

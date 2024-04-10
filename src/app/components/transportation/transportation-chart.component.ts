import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  NgApexchartsModule,
} from 'ng-apexcharts';

export type Data = {
  name: string;
  co2_eq: number;
};

const data: Data[] = [
  { name: '✈️ Plane', co2_eq: 375 },
  { name: '🚗 Car, gas or diesel', co2_eq: 222 },
  { name: '🚗 Car, hybrid', co2_eq: 171 },
  { name: '🚗 Car, electric, CH electriciy', co2_eq: 89 },
  { name: '🚗 Car, electric, eco electriciy', co2_eq: 75 },
  { name: '🚌 Bus', co2_eq: 62 },
  { name: '🚄 Train (avg. DE, FR, AT, IT)', co2_eq: 42 },
  { name: '🚈 Public transport avg. CH', co2_eq: 25 },
  { name: '🚲 E-bike', co2_eq: 14 },
  { name: '🚲 Bicycle', co2_eq: 8 },
  { name: '🚄 Train, CH', co2_eq: 7 },
  { name: '🚶 Walking', co2_eq: 0 },
];

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  imports: [NgApexchartsModule],
  selector: 'transportation-chart',
  standalone: true,
  templateUrl: './transportation-chart.component.html',
  styleUrls: ['./transportation-chart.component.css'],
})
export class TransportationChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'basic',
          data: data.map((d) => d.co2_eq),
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
        categories: data.map((d) => d.name),
      },
    };
  }
}

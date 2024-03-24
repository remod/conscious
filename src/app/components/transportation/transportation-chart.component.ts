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
  co2e: number;
};

const data: Data[] = [
  { name: '✈️ Plane', co2e: 375 },
  { name: '🚗 Car, gas or diesel', co2e: 222 },
  { name: '🚗 Car, hybrid', co2e: 171 },
  { name: '🚗 Car, electric, CH electriciy', co2e: 89 },
  { name: '🚗 Car, electric, eco electriciy', co2e: 75 },
  { name: '🚌 Bus', co2e: 62 },
  { name: '🚄 Train (avg. DE, FR, AT, IT)', co2e: 42 },
  { name: '🚈 Public transport avg. CH', co2e: 25 },
  { name: '🚲 E-bike', co2e: 14 },
  { name: '🚲 Bicycle', co2e: 8 },
  { name: '🚄 Train, CH', co2e: 7 },
  { name: '🚶 Walking', co2e: 0 },
];

export type ChartOptions = {
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
          data: data.map((d) => d.co2e),
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

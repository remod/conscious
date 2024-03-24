import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexResponsive,
  NgApexchartsModule,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';

export type Data = {
  name: string;
  co2e: number;
};

const data: Data[] = [
  { name: 'Mobility', co2e: 4140 },
  { name: 'Consumption (non Food)', co2e: 3800 },
  { name: 'Housing and Energy', co2e: 2190 },
  { name: 'Nutrition', co2e: 2110 },
  { name: 'Public Services', co2e: 1280 },
];

type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  imports: [NgApexchartsModule],
  selector: 'footprint-chart',
  standalone: true,
  templateUrl: './footprint-chart.component.html',
  styleUrls: ['./footprint-chart.component.css'],
})
export class FootprintChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: data.map((d) => d.co2e),
      chart: {
        type: 'donut',
      },
      labels: data.map((d) => d.name),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}

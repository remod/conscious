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
  source: string;
  year: number;
};

const data: Data[] = [
  {
    name: 'Water Heat Pump',
    co2e: 380,
    source:
      'https://www.wwf.ch/de/unsere-ziele/gebaeudesanierung-und-heizsysteme',
    year: 0,
  },
  {
    name: 'Air Heat Pump',
    co2e: 490,
    source:
      'https://www.wwf.ch/de/unsere-ziele/gebaeudesanierung-und-heizsysteme',
    year: 0,
  },
  {
    name: 'Wood Pellets',
    co2e: 710,
    source:
      'https://www.wwf.ch/de/unsere-ziele/gebaeudesanierung-und-heizsysteme',
    year: 0,
  },
  {
    name: 'Gas',
    co2e: 3650,
    source:
      'https://www.wwf.ch/de/unsere-ziele/gebaeudesanierung-und-heizsysteme',
    year: 0,
  },
  {
    name: 'Oil',
    co2e: 4680,
    source:
      'https://www.wwf.ch/de/unsere-ziele/gebaeudesanierung-und-heizsysteme',
    year: 0,
  },
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
  selector: 'heating-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class HeatingChartComponent {
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

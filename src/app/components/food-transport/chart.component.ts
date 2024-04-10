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
    name: 'Asparagus, truck from Switzerland',
    co2e: 0.79,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Asparagus, ship from Peru',
    co2e: 1.37,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Asparagus, airplane from Peru',
    co2e: 14.9,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Roses, airplane from Kenya',
    co2e: 4.0,
    source:
      'https://www.geo.de/natur/nachhaltigkeit/rosen-aus-europa_30126542-30166538.html',
    year: 0,
  },
  {
    name: 'Roses, truck from Netherlands',
    co2e: 68.0,
    source:
      'https://www.geo.de/natur/nachhaltigkeit/rosen-aus-europa_30126542-30166538.html',
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
  selector: 'food-transport-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class FoodTransportChartComponent {
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

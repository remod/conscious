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
    name: 'Tap Water',
    co2e: 0.0005,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Tap Water, sparkling',
    co2e: 0.05,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Tap Water, sparkling & cooled',
    co2e: 0.07,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Black Tea',
    co2e: 0.03 / 0.25,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Mineral Water, sparkling',
    co2e: 0.2,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Mineral Water, sparkling & cooled',
    co2e: 0.26,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Ice Tea',
    co2e: 0.33,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Orange Juice, from concentrate',
    co2e: 0.65,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Cappuccino',
    co2e: 0.21 / 0.3,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Coffee',
    co2e: 0.09 / 0.125,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Apple Juice',
    co2e: 0.73,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Soy Milk',
    co2e: 0.8,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Oat Milk',
    co2e: 0.8,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Energy Drink',
    co2e: 0.17 / 0.2,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Almond Milk',
    co2e: 0.9,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Beer',
    co2e: 0.28 / 0.3,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Rice Milk',
    co2e: 1.0,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Milk',
    co2e: 1.4,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Orange Juice, fresh',
    co2e: 1.5,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'Red Wine',
    co2e: 0.23 / 0.1,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
  },
  {
    name: 'White Wine',
    co2e: 0.24 / 0.1,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2021,
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
  selector: 'beverages-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class BeveragesChartComponent {
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

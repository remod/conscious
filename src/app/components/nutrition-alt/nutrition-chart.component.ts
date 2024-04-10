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
  source: string;
  year: number;
};

const data: Data[] = [
  {
    name: 'Base',
    co2_eq: 0.6 * (2110 - 482),
    source:
      'https://www.wwf.ch/sites/default/files/doc-2023-04/Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2015,
  },
  {
    name: 'No Animal Products',
    co2_eq: (0.7 - 0.6) * (2110 - 482),
    source:
      'https://www.wwf.ch/sites/default/files/doc-2023-04/Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2015,
  },
  {
    name: 'No Meat',
    co2_eq: (1.0 - 0.7) * (2110 - 482),
    source:
      'https://www.wwf.ch/sites/default/files/doc-2023-04/Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2015,
  },
  {
    name: 'No Food Waste',
    co2_eq: 482,
    source:
      'https://www.bafu.admin.ch/dam/bafu/de/dokumente/abfall/externe-studien-berichte/lebensmittelverluste-in-der-schweiz-umweltbelastung-und-verminderungspotenzial.pdf.download.pdf/ETH-Bericht_Foodwaste_FINAL.pdf',
    year: 2019,
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
  selector: 'nutrition-alt-chart',
  standalone: true,
  templateUrl: './nutrition-chart.component.html',
  styleUrls: ['./nutrition-chart.component.css'],
})
export class NutritionAltChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: data.map(({ name, co2_eq }) => ({ name, data: [co2_eq] })),
      chart: {
        stacked: true,
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
        categories: ['Nutrition'],
      },
    };
  }
}

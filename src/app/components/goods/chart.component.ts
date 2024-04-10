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

/*
Im Kleider kaufen sind die Schweizer Weltspitze. 
15 Kilogramm sind es im Durchschnitt pro Jahr. 
Das entspricht etwa acht Hemden, einem Wintermantel, 
einer Jacke, fünf Hosen, sechs T-Shirts, vier Pullovern, 
zehn Paar Socken, zehn Unterwäschegarnituren und einem 
Abendkleid. 
Dafür geben sie durchschnittlich 1500 Franken pro Jahr aus.
https://www.srf.ch/wissen/nachhaltigkeit/nachhaltigkeit-35-franken-pro-monat-1500-franken-pro-jahr
 */

const data: Data[] = [
  {
    name: 'Laptop, incl. 4 years of use',
    co2e: 331.0,
    source: 'https://circularcomputing.com/news/carbon-footprint-laptop/',
    year: 2021,
  },
  {
    name: 'Sofa',
    co2e: 90.0,
    source:
      'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/d9390f21-b3691a_o%CC%88kologische-auswirkung-nutzungsdauer-v1.1.pdf',
    year: 2022,
  },
  {
    name: 'Double Mattress',
    co2e: 79.0,
    source:
      'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/d9390f21-b3691a_o%CC%88kologische-auswirkung-nutzungsdauer-v1.1.pdf',
    year: 2022,
  },
  {
    name: 'Office Desk',
    co2e: 35.0,
    source:
      'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/d9390f21-b3691a_o%CC%88kologische-auswirkung-nutzungsdauer-v1.1.pdf',
    year: 2022,
  },
  {
    name: 'Jeans',
    co2e: 33.4,
    source:
      'https://levistrauss.com/wp-content/uploads/2015/03/Full-LCA-Results-Deck-FINAL.pdf',
    year: 2015,
  },
  {
    name: 'Wardrobe',
    co2e: 31.0,
    source:
      'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/d9390f21-b3691a_o%CC%88kologische-auswirkung-nutzungsdauer-v1.1.pdf',
    year: 2022,
  },
  {
    name: 'T-shirt, cotton, incl. 55 washes',
    co2e: 10.75,
    source:
      'https://systain.com/wp-content/uploads/2022/08/Systain_Whitepaper_Carbon-Footprint-von-Bekleidung_de-2.pdf',
    year: 2022,
  },
  {
    name: '1l Diesel',
    co2e: 2.6,
    source:
      'https://www.sueddeutsche.de/leben/auto-warum-ist-der-co2-ausstoss-schwerer-als-der-verbrannte-sprit-dpa.urn-newsml-dpa-com-20090101-140121-99-01441',
    year: 2009,
  },
  {
    name: '1l Gas',
    co2e: 2.3,
    source:
      'https://www.sueddeutsche.de/leben/auto-warum-ist-der-co2-ausstoss-schwerer-als-der-verbrannte-sprit-dpa.urn-newsml-dpa-com-20090101-140121-99-01441',
    year: 2009,
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
  selector: 'goods-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class GoodsChartComponent {
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

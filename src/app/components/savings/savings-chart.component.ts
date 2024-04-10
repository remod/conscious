import { Component, ViewChild } from '@angular/core';
import {
  ApexOptions,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { Category, categoryColor } from '../Category';

export type Data = {
  name: string;
  co2e: number;
  category: Category;
  source: string | string[];
  year: number;
};

const transportationSum: number = 4140;
const flightsFraction: number = 0.27 / (0.27 + 0.23);
const flightsSum: number = transportationSum * flightsFraction;
const nonFlightsSum: number = transportationSum * (1 - flightsFraction);
const carSum: number = nonFlightsSum * 0.712;
const gasDieselCarCo2e: number = 222;
const electricCarCo2e: number = (89 + 75) / 2;

const numInhabitants2022: number = 8815400;

const data: Data[] = [
  {
    name: 'Avoid Flights',
    co2e: flightsSum,
    category: Category.Mobility,
    source:
      'https://www.parlament.ch/de/ratsbetrieb/suche-curia-vista/geschaeft?AffairId=20214259',
    year: 2021,
  },
  {
    name: 'Replace Fossil Fuel Heating with Renewable Heating',
    co2e: ((4680 + 3650) / 2 - (710 + 490 + 380) / 3) / 2.19,
    category: Category.Housing,
    source: [
      'https://www.wwf.ch/sites/default/files/doc-2023-04/Faktenblatt_Ern%C3%A4hrung_DE.pdf',
      'https://www.bfs.admin.ch/news/de/2022-0544',
    ],
    year: 2015, // resp. 2022 for the 2nd link
  },
  {
    name: 'Install 10 kWp Solar Panels',
    co2e: (0.128 - 0.042) * 10000,
    category: Category.Housing,
    source:
      'https://www.swissolar.ch/01_wissen/swissolar-publikationen/branchen-faktenblatt_pv_ch_d.pdf',
    year: 2020,
  },
  {
    name: 'Use Public Transport instead of Fossil Fuel Car',
    // TODO: Does not contain public transport emissions
    co2e: carSum * (1 - electricCarCo2e / gasDieselCarCo2e),
    category: Category.Mobility,
    source:
      'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
    year: 2021,
  },
  {
    name: 'Become Vegan',
    co2e: (1.0 - 0.6) * (2110 - 482),
    category: Category.Nutrition,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2023-04/Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2015,
  },
  {
    name: 'Use Electric instead of Fossil Fuel Car',
    co2e: (carSum * electricCarCo2e) / gasDieselCarCo2e,
    category: Category.Mobility,
    source:
      'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
    year: 2021,
  },
  {
    name: 'Become Vegetarian',
    co2e: (1.0 - 0.7) * (2110 - 482),
    category: Category.Nutrition,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2023-04/Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2015,
  },
  {
    name: 'Avoid Food Waste',
    co2e: 482,
    category: Category.Nutrition,
    source:
      'https://www.bafu.admin.ch/dam/bafu/de/dokumente/abfall/externe-studien-berichte/lebensmittelverluste-in-der-schweiz-umweltbelastung-und-verminderungspotenzial.pdf.download.pdf/ETH-Bericht_Foodwaste_FINAL.pdf',
    year: 2019,
  },
  {
    name: 'Become Flexitarian',
    co2e: (1.0 - 0.85) * (2110 - 482),
    category: Category.Nutrition,
    source:
      'https://www.wwf.ch/sites/default/files/doc-2023-04/Faktenblatt_Ern%C3%A4hrung_DE.pdf',
    year: 2015,
  },
  {
    name: 'Use Clothing 7 instead of 4 Years',
    co2e: 1486000000 / numInhabitants2022,
    category: Category.Consumption,
    source:
      'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/20967b15-infras_zusammenfassung-laengere-nutzungsdauer_de_20220322.pdf',
    year: 2022,
  },
  {
    name: 'Recycle',
    co2e: 507000000.0 / 8815400.0,
    category: Category.Consumption,
    source:
      'https://swissrecycle.ch/de/wertstoffe-wissen/leistungsbericht-2023/kennzahlen',
    year: 2022,
  },
  {
    name: 'Use Furniture 13.5 instead of 10.5 Years',
    co2e: 143000000 / numInhabitants2022,
    category: Category.Consumption,
    source:
      'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/20967b15-infras_zusammenfassung-laengere-nutzungsdauer_de_20220322.pdf',
    year: 2022,
  },
  {
    name: 'Use Smartphone 5.3 instead of 2.3 Years',
    co2e: 91000000 / numInhabitants2022,
    category: Category.Consumption,
    source:
      'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/20967b15-infras_zusammenfassung-laengere-nutzungsdauer_de_20220322.pdf',
    year: 2022,
  },
];

@Component({
  imports: [NgApexchartsModule],
  selector: 'savings-chart',
  standalone: true,
  templateUrl: './savings-chart.component.html',
  styleUrls: ['./savings-chart.component.css'],
})
export class SavingsChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ApexOptions;

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
      colors: data.map((d) => categoryColor[d.category]),
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: data.map((d) => d.name),
      },
      legend: {
        show: false,
      },
    };
  }
}
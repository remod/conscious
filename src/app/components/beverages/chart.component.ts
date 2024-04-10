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
    name: 'Potatos',
    co2e: 0.2,
    source:
      'https://www.geo.de/natur/nachhaltigkeit/reis_30126546-30166538.html',
    year: 0,
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
    name: 'Pasta',
    co2e: 1.0,
    source:
      'https://www.geo.de/natur/nachhaltigkeit/reis_30126546-30166538.html',
    year: 0,
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
  {
    name: 'Coconut Oil',
    co2e: 2.3,
    source:
      'https://www.swrfernsehen.de/marktcheck/oekochecker/wie-gesund-und-nachhaltig-sind-oele-100.html#:~:text=Der%20CO2%2DFu%C3%9Fabdruck%20von%20Oliven%C3%B6l,2%20kg%20CO2*%20pro%20Kilogramm.',
    year: 2022,
  },
  {
    name: 'Palm Oil',
    co2e: 2.9,
    source:
      'https://www.swrfernsehen.de/marktcheck/oekochecker/wie-gesund-und-nachhaltig-sind-oele-100.html#:~:text=Der%20CO2%2DFu%C3%9Fabdruck%20von%20Oliven%C3%B6l,2%20kg%20CO2*%20pro%20Kilogramm.',
    year: 2022,
  },
  {
    name: 'Asian Rice',
    co2e: 3.0,
    source:
      'https://www.geo.de/natur/nachhaltigkeit/reis_30126546-30166538.html',
    year: 0,
  },
  {
    name: 'Sunflower Oil',
    co2e: 3.2,
    source:
      'https://www.swrfernsehen.de/marktcheck/oekochecker/wie-gesund-und-nachhaltig-sind-oele-100.html#:~:text=Der%20CO2%2DFu%C3%9Fabdruck%20von%20Oliven%C3%B6l,2%20kg%20CO2*%20pro%20Kilogramm.',
    year: 2022,
  },
  {
    name: 'Olive Oil',
    co2e: 3.2,
    source:
      'https://www.swrfernsehen.de/marktcheck/oekochecker/wie-gesund-und-nachhaltig-sind-oele-100.html#:~:text=Der%20CO2%2DFu%C3%9Fabdruck%20von%20Oliven%C3%B6l,2%20kg%20CO2*%20pro%20Kilogramm.',
    year: 2022,
  },
  {
    name: 'Rapeseed Oil',
    co2e: 3.3,
    source:
      'https://www.swrfernsehen.de/marktcheck/oekochecker/wie-gesund-und-nachhaltig-sind-oele-100.html#:~:text=Der%20CO2%2DFu%C3%9Fabdruck%20von%20Oliven%C3%B6l,2%20kg%20CO2*%20pro%20Kilogramm.',
    year: 2022,
  },
  {
    name: 'Chicken',
    co2e: 3.4,
    source:
      'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
    year: 0,
  },
  {
    name: 'Pork',
    co2e: 3.4,
    source:
      'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
    year: 0,
  },
  {
    name: 'Chocolate',
    co2e: 3.5,
    source:
      'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
    year: 0,
  },
  {
    name: 'Frozen Fries',
    co2e: 5.7,
    source:
      'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
    year: 0,
  },
  {
    name: 'Cream',
    co2e: 7.6,
    source:
      'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
    year: 0,
  },
  {
    name: 'Cheese',
    co2e: 8.5,
    source:
      'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
    year: 0,
  },
  {
    name: 'Beef',
    co2e: 13.3,
    source:
      'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
    year: 0,
  },
  {
    name: 'Butter',
    co2e: 23.8,
    source:
      'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
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

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

export type Emission = {
  co2e: number;
  source: string;
  year: number;
};

export type Product = {
  name: string;
  emission: Emission[];
};

const data: Product[] = [
  {
    name: 'Tap Water',
    emission: [
      {
        co2e: 0.0005,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Tap Water, sparkling',
    emission: [
      {
        co2e: 0.05,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Tap Water, sparkling & cooled',
    emission: [
      {
        co2e: 0.07,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Black Tea',
    emission: [
      {
        co2e: 0.03 / 0.25,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Local Fruits and Vegetables',
    emission: [
      {
        co2e: (0.13 + 0.2) / 2,
        source:
          'https://www.carbon-connect.ch/resources/blog/lebensmittel-und-ihr-co2-fussabdruck',
        year: 0,
      },
    ],
  },
  {
    name: 'Mineral Water, sparkling',
    emission: [
      {
        co2e: 0.2,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Potatos',
    emission: [
      {
        co2e: 0.2,
        source:
          'https://www.geo.de/natur/nachhaltigkeit/reis_30126546-30166538.html',
        year: 0,
      },
    ],
  },
  {
    name: 'Mineral Water, sparkling & cooled',
    emission: [
      {
        co2e: 0.26,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Ice Tea',
    emission: [
      {
        co2e: 0.33,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Orange Juice, from concentrate',
    emission: [
      {
        co2e: 0.65,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Cappuccino',
    emission: [
      {
        co2e: 0.21 / 0.3,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Coffee',
    emission: [
      {
        co2e: 0.09 / 0.125,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Apple Juice',
    emission: [
      {
        co2e: 0.73,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Frozen Vegetables',
    emission: [
      {
        co2e: (0.65 + 0.95) / 2,
        source:
          'https://www.carbon-connect.ch/resources/blog/lebensmittel-und-ihr-co2-fussabdruck',
        year: 0,
      },
    ],
  },
  {
    name: 'Soy Milk',
    emission: [
      {
        co2e: 0.8,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Oat Milk',
    emission: [
      {
        co2e: 0.8,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Energy Drink',
    emission: [
      {
        co2e: 0.17 / 0.2,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Almond Milk',
    emission: [
      {
        co2e: 0.9,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Beer',
    emission: [
      {
        co2e: 0.28 / 0.3,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Rice Milk',
    emission: [
      {
        co2e: 1.0,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Pasta',
    emission: [
      {
        co2e: 1.0,
        source:
          'https://www.geo.de/natur/nachhaltigkeit/reis_30126546-30166538.html',
        year: 0,
      },
    ],
  },
  {
    name: 'Joghurt',
    emission: [
      {
        co2e: 1.2,
        source:
          'https://www.carbon-connect.ch/resources/blog/lebensmittel-und-ihr-co2-fussabdruck',
        year: 0,
      },
    ],
  },
  {
    name: 'Milk',
    emission: [
      {
        co2e: 1.4,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Orange Juice, fresh',
    emission: [
      {
        co2e: 1.5,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Eggs',
    emission: [
      {
        co2e: 2.0,
        source:
          'https://www.carbon-connect.ch/resources/blog/lebensmittel-und-ihr-co2-fussabdruck',
        year: 0,
      },
    ],
  },
  {
    name: 'Red Wine',
    emission: [
      {
        co2e: 0.23 / 0.1,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'White Wine',
    emission: [
      {
        co2e: 0.24 / 0.1,
        source:
          'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
        year: 2021,
      },
    ],
  },
  {
    name: 'Coconut Oil',
    emission: [
      {
        co2e: 2.3,
        source:
          'https://www.swrfernsehen.de/marktcheck/oekochecker/wie-gesund-und-nachhaltig-sind-oele-100.html#:~:text=Der%20CO2%2DFu%C3%9Fabdruck%20von%20Oliven%C3%B6l,2%20kg%20CO2*%20pro%20Kilogramm.',
        year: 2022,
      },
    ],
  },
  {
    name: 'Palm Oil',
    emission: [
      {
        co2e: 2.9,
        source:
          'https://www.swrfernsehen.de/marktcheck/oekochecker/wie-gesund-und-nachhaltig-sind-oele-100.html#:~:text=Der%20CO2%2DFu%C3%9Fabdruck%20von%20Oliven%C3%B6l,2%20kg%20CO2*%20pro%20Kilogramm.',
        year: 2022,
      },
    ],
  },
  {
    name: 'Asian Rice',
    emission: [
      {
        co2e: 3.0,
        source:
          'https://www.geo.de/natur/nachhaltigkeit/reis_30126546-30166538.html',
        year: 0,
      },
    ],
  },
  {
    name: 'Sunflower Oil',
    emission: [
      {
        co2e: 3.2,
        source:
          'https://www.swrfernsehen.de/marktcheck/oekochecker/wie-gesund-und-nachhaltig-sind-oele-100.html#:~:text=Der%20CO2%2DFu%C3%9Fabdruck%20von%20Oliven%C3%B6l,2%20kg%20CO2*%20pro%20Kilogramm.',
        year: 2022,
      },
    ],
  },
  {
    name: 'Olive Oil',
    emission: [
      {
        co2e: 3.2,
        source:
          'https://www.swrfernsehen.de/marktcheck/oekochecker/wie-gesund-und-nachhaltig-sind-oele-100.html#:~:text=Der%20CO2%2DFu%C3%9Fabdruck%20von%20Oliven%C3%B6l,2%20kg%20CO2*%20pro%20Kilogramm.',
        year: 2022,
      },
    ],
  },
  {
    name: 'Rapeseed Oil',
    emission: [
      {
        co2e: 3.3,
        source:
          'https://www.swrfernsehen.de/marktcheck/oekochecker/wie-gesund-und-nachhaltig-sind-oele-100.html#:~:text=Der%20CO2%2DFu%C3%9Fabdruck%20von%20Oliven%C3%B6l,2%20kg%20CO2*%20pro%20Kilogramm.',
        year: 2022,
      },
    ],
  },
  {
    name: 'Chicken',
    emission: [
      {
        co2e: 3.4,
        source:
          'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
        year: 0,
      },
    ],
  },
  {
    name: 'Pork',
    emission: [
      {
        co2e: 3.4,
        source:
          'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
        year: 0,
      },
    ],
  },
  {
    name: 'Chocolate',
    emission: [
      {
        co2e: 3.5,
        source:
          'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
        year: 0,
      },
    ],
  },
  {
    name: 'Frozen Fries',
    emission: [
      {
        co2e: 5.7,
        source:
          'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
        year: 0,
      },
    ],
  },
  {
    name: 'Cream',
    emission: [
      {
        co2e: 7.6,
        source:
          'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
        year: 0,
      },
    ],
  },
  {
    name: 'Cheese',
    emission: [
      {
        co2e: 8.5,
        source:
          'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
        year: 0,
      },
    ],
  },
  {
    name: 'Beef',
    emission: [
      {
        co2e: 13.3,
        source:
          'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
        year: 0,
      },
      {
        co2e: 15.0,
        source:
          'https://www.carbon-connect.ch/resources/blog/lebensmittel-und-ihr-co2-fussabdruck',
        year: 0,
      },
    ],
  },
  {
    name: 'Butter',
    emission: [
      {
        co2e: 23.8,
        source:
          'https://www.nachhaltigleben.ch/food/die-groessten-klimasuender-unter-den-lebensmitteln-4781',
        year: 0,
      },
    ],
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
          // Average emission.
          data: data.map(
            (d) =>
              d.emission.reduce((acc, curr) => acc + curr.co2e, 0) /
              d.emission.length
          ),
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

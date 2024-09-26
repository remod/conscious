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
import { NutritionCategory, nutritionCategoryColor } from '../NutritionCategory';

export type Emission = {
  co2_eq: number;
  source: string;
  year: number;
};

export type Product = {
  name: string;
  emission: Emission[];
  category: NutritionCategory;
};

const data: Product[] = [
  {
    name: 'Wasser',
    emission: [
      {
        co2_eq: 0.002,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Beverage,
  },
  {
    name: 'Erbsen',
    emission: [
      {
        co2_eq: 118,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Kartoffeln',
    emission: [
      {
        co2_eq: 144,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Carbohydrates,
  },
  {
    name: 'Margarine',
    emission: [
      {
        co2_eq: 157,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.FatAndOil,
  },
  {
    name: 'Kürbis',
    emission: [
      {
        co2_eq: 181,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Spinat',
    emission: [
      {
        co2_eq: 182,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Linsen',
    emission: [
      {
        co2_eq: 186,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Carbohydrates,
  },
  {
    name: 'Nüsse',
    emission: [
      {
        co2_eq: 220,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.FatAndOil,
  },
  {
    name: 'Pasta',
    emission: [
      {
        co2_eq: 247,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Carbohydrates,
  },
  {
    name: 'Schwarztee',
    emission: [
      {
        co2_eq: 265,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Beverage,
  },
  {
    name: 'Karotten',
    emission: [
      {
        co2_eq: 295,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Erbsenbasierter Fleischersatz',
    emission: [
      {
        co2_eq: 299,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Proteins,
  },
  {
    name: 'Äpfel',
    emission: [
      {
        co2_eq: 323,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Brot',
    emission: [
      {
        co2_eq: 343,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Carbohydrates,
  },
  {
    name: 'Hafermilch',
    emission: [
      {
        co2_eq: 367,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Beverage,
  },
  {
    name: 'Makrele',
    emission: [
      {
        co2_eq: 385,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Proteins,
  },
  {
    name: 'Bananen',
    emission: [
      {
        co2_eq: 409,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Erdbeeren',
    emission: [
      {
        co2_eq: 423,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Dunkle Schokolade',
    emission: [
      {
        co2_eq: 437,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.FatAndOil,
  },
  {
    name: 'Avocado',
    emission: [
      {
        co2_eq: 457,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Gurken',
    emission: [
      {
        co2_eq: 501,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Rispentomaten',
    emission: [
      {
        co2_eq: 505,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Steinpilze',
    emission: [
      {
        co2_eq: 617,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Apfelsaft',
    emission: [
      {
        co2_eq: 621,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Beverage,
  },
  {
    name: 'Orangen',
    emission: [
      {
        co2_eq: 626,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Tofu',
    emission: [
      {
        co2_eq: 643,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Proteins,
  },
  {
    name: 'Milchschokolade',
    emission: [
      {
        co2_eq: 650,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.FatAndOil,
  },
  {
    name: 'Bier',
    emission: [
      {
        co2_eq: 770,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Beverage,
  },
  {
    name: 'Kaffee',
    emission: [
      {
        co2_eq: 868,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Beverage,
  },
  {
    name: 'Hühnerfleisch',
    emission: [
      {
        co2_eq: 894,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Proteins,
  },
  {
    name: 'Eier',
    emission: [
      {
        co2_eq: 923,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Proteins,
  },
  {
    name: 'Reis',
    emission: [
      {
        co2_eq: 933,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Carbohydrates,
  },
  {
    name: 'Aubergine (saisonal)',
    emission: [
      {
        co2_eq: 983,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Thunfisch',
    emission: [
      {
        co2_eq: 1035,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Proteins,
  },
  {
    name: 'Käse',
    emission: [
      {
        co2_eq: 1300,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Proteins,
  },
  {
    name: 'Datteln',
    emission: [
      {
        co2_eq: 1349,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Grüne Spargeln',
    emission: [
      {
        co2_eq: 1368,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Butter',
    emission: [
      {
        co2_eq: 1384,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.FatAndOil,
  },
  {
    name: 'Milch',
    emission: [
      {
        co2_eq: 1554,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Beverage,
  },
  {
    name: 'Aubergine (Mai, Spanien, per LKW)',
    emission: [
      {
        co2_eq: 1632,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Pommes Frites',
    emission: [
      {
        co2_eq: 1739,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Carbohydrates,
  },
  {
    name: 'Lachs',
    emission: [
      {
        co2_eq: 1757,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Proteins,
  },
  {
    name: 'Naturjoghurt',
    emission: [
      {
        co2_eq: 1867,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Proteins,
  },
  {
    name: 'Orangensaft',
    emission: [
      {
        co2_eq: 2248,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Beverage,
  },
  {
    name: 'Champignons',
    emission: [
      {
        co2_eq: 2343,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Wein',
    emission: [
      {
        co2_eq: 2359,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Beverage,
  },
  {
    name: 'Aubergine (Mai, Deutschland)',
    emission: [
      {
        co2_eq: 2465,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: 'Rindfleisch',
    emission: [
      {
        co2_eq: 5003,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Proteins,
  },
  {
    name: 'Kalbfleisch',
    emission: [
      {
        co2_eq: 7925,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.Proteins,
  },
  {
    name: 'Aubergine (Mai, Thailand, per Flugzeug)',
    emission: [
      {
        co2_eq: 13682,
        source:
          'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
        year: 2022,
      },
    ],
    category: NutritionCategory.VegetableAndFruit,
  },
];

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  imports: [NgApexchartsModule],
  selector: 'beverages-ayce-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class BeveragesAyceChartComponent {
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
              d.emission.reduce((acc, curr) => acc + curr.co2_eq, 0) /
              d.emission.length
          ),
        },
      ],
      chart: {
        type: 'bar',
        height: 1000,
      },
      colors: data.map((d) => nutritionCategoryColor[d.category]),
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
    };
  }
}

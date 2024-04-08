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
  source: string;
  year: number;
};

const data: Data[] = [
  {
    name: 'Mobility',
    co2e: 4140,
    category: Category.Mobility,
    source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
    year: 2024,
  },
  {
    // 270kg is clothing: https://www.europarl.europa.eu/topics/de/article/20201208STO93327/umweltauswirkungen-von-textilproduktion-und-abfallen-infografik
    name: 'Consumption (non Food)',
    co2e: 3800,
    category: Category.Consumption,
    source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
    year: 2024,
  },
  {
    name: 'Housing and Energy',
    co2e: 2190,
    category: Category.Housing,
    source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
    year: 2024,
  },
  {
    name: 'Nutrition',
    co2e: 2110,
    category: Category.Nutrition,
    source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
    year: 2024,
  },
  {
    name: 'Public Services',
    co2e: 1280,
    category: Category.PublicServices,
    source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
    year: 2024,
  },
];

@Component({
  imports: [NgApexchartsModule],
  selector: 'footprint-chart',
  standalone: true,
  templateUrl: './footprint-chart.component.html',
  styleUrls: ['./footprint-chart.component.css'],
})
export class FootprintChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ApexOptions;

  constructor() {
    this.chartOptions = {
      series: data.map((d) => d.co2e),
      chart: {
        type: 'donut',
      },
      labels: data.map((d) => d.name),
      colors: data.map((d) => categoryColor[d.category]),
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

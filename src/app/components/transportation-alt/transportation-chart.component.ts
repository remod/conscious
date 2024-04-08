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

const transportationSum: number = 4140;
const flightsFraction: number = 0.27 / (0.27 + 0.23);
const flightsSum: number = transportationSum * flightsFraction;
const nonFlightsSum: number = transportationSum * (1 - flightsFraction);
const carSum: number = nonFlightsSum * 0.712;
const gasDieselCarCo2e: number = 222;
const electricCarCo2e: number = (89 + 75) / 2;

const data: Data[] = [
  {
    name: 'Base',
    co2e: transportationSum - flightsSum - carSum,
    source:
      'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
    year: 2021,
  },
  {
    name: 'Use Public Transport instead of Car',
    // TODO: Does not contain public transport emissions
    co2e: carSum * (1 - electricCarCo2e / gasDieselCarCo2e),
    source:
      'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
    year: 2021,
  },
  {
    name: 'Use Electric instead of Gas or Diesel Car',
    co2e: (carSum * electricCarCo2e) / gasDieselCarCo2e,
    source:
      'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
    year: 2021,
  },
  {
    name: 'No Flights',
    co2e: flightsSum,
    source:
      'https://www.parlament.ch/de/ratsbetrieb/suche-curia-vista/geschaeft?AffairId=20214259',
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
  selector: 'transportation-alt-chart',
  standalone: true,
  templateUrl: './transportation-chart.component.html',
  styleUrls: ['./transportation-chart.component.css'],
})
export class TransportationAltChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: data.map(({ name, co2e }) => ({ name, data: [co2e] })),
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
        categories: ['Transportation'],
      },
    };
  }
}

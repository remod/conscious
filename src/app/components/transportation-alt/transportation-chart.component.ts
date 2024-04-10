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

const transportationSum: number = 4140;
const flightsFraction: number = 0.27 / (0.27 + 0.23);
const flightsSum: number = transportationSum * flightsFraction;
const nonFlightsSum: number = transportationSum * (1 - flightsFraction);
const carSum: number = nonFlightsSum * 0.712;
const gasDieselCarco2_eq: number = 222;
const electricCarco2_eq: number = (89 + 75) / 2;

const data: Data[] = [
  {
    name: 'Base',
    co2_eq: transportationSum - flightsSum - carSum,
    source:
      'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
    year: 2021,
  },
  {
    name: 'Use Public Transport instead of Car',
    // TODO: Does not contain public transport emissions
    co2_eq: carSum * (1 - electricCarco2_eq / gasDieselCarco2_eq),
    source:
      'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
    year: 2021,
  },
  {
    name: 'Use Electric instead of Gas or Diesel Car',
    co2_eq: (carSum * electricCarco2_eq) / gasDieselCarco2_eq,
    source:
      'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
    year: 2021,
  },
  {
    name: 'No Flights',
    co2_eq: flightsSum,
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
        categories: ['Transportation'],
      },
    };
  }
}

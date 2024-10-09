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
import { DataSource, DataPoint } from '../DataInterfaces';

interface HeatingDataSource extends DataSource {
  data_points: {
    water_heat_pump: DataPoint;
    air_heat_pump: DataPoint;
    wood_pellets: DataPoint;
    gas: DataPoint;
    oil: DataPoint;
  }
}

const heating: HeatingDataSource = {
  name: 'Heating',
  unit: 'kg CO2-eq',
  source: 'https://www.wwf.ch/de/unsere-ziele/gebaeudesanierung-und-heizsysteme',
  // Looked up in 2024, but there is no year indicated.
  year: 0,
  data_points: {
    water_heat_pump: {
      name: 'Water Heat Pump',
      value: 380,
    },
    air_heat_pump: {
      name: 'Air Heat Pump',
      value: 490,
    },
    wood_pellets: {
      name: 'Wood Pellets',
      value: 710,
    },
    gas: {
      name: 'Gas',
      value: 3650,
    },
    oil: {
      name: 'Oil',
      value: 4680,
    },
  },
};

const data: { name: string; co2_eq: number }[] = [
  {
    name: 'Water Heat Pump',
    co2_eq: heating.data_points.water_heat_pump.value,
  },
  {
    name: 'Air Heat Pump',
    co2_eq: heating.data_points.air_heat_pump.value,
  },
  {
    name: 'Wood Pellets',
    co2_eq: heating.data_points.wood_pellets.value,
  },
  {
    name: 'Gas',
    co2_eq: heating.data_points.gas.value,
  },
  {
    name: 'Oil',
    co2_eq: heating.data_points.oil.value,
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
  selector: 'heating-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class HeatingChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'basic',
          data: data.map((d) => d.co2_eq),
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

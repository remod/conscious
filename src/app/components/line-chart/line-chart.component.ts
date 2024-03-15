// ⤵️ import these
import { ChartDataset, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  chartData: ChartDataset[] = [
    {
      label: '$ in millions',
      data: [1551, 1688, 1800, 1895, 2124, 2124],
    },
  ];
  chartLabels: string[] = [
    '2016 Revenue',
    '2017 Revenue',
    '2018 Revenue',
    '2019 Revenue',
    '2020 Revenue',
    '2021 Revenue',
  ];
  chartOptions: ChartOptions = {};

  constructor() {}

  ngOnInit(): void {}
}

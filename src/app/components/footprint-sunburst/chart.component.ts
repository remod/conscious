import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Sunburst from 'sunburst-chart';
import { DataNode } from 'sunburst-chart';
import { Category, categoryColor } from '../Category';

interface Data extends DataNode {
  name: string;
  co2e: number;
  category: Category;
  source: string;
  year: number;
}

const transportationSum: number = 4140;
const airplaneFraction: number = 0.27 / (0.27 + 0.23);
const airplaneSum: number = transportationSum * airplaneFraction;
const nonAirplaneSum: number = transportationSum * (1 - airplaneFraction);
const carSum: number = nonAirplaneSum * 0.712;
const truckSum: number = nonAirplaneSum * 0.13;
const deliveryVanSum: number = nonAirplaneSum * 0.084;
const busSum: number = nonAirplaneSum * 0.03;
const motorcycleSum: number = nonAirplaneSum * 0.017;
const shipSum: number = nonAirplaneSum * 0.008;
const nationalAirplaneSum: number = nonAirplaneSum * 0.004;
const trainSum: number = nonAirplaneSum * 0.002;
const otherSum: number = nonAirplaneSum * 0.012;

@Component({
  selector: 'footprint-sunburst-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  standalone: true,
})
export class FootprintSunburstChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) chart!: ElementRef;

  constructor() {}

  ngOnInit() {
    const sbdata = {
      name: '',
      color: 'white',
      children: [
        {
          name: 'Mobility',
          co2e: 0, // 4140,
          category: Category.Mobility,
          source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
          year: 2024,
          children: [
            {
              name: 'Airplane',
              co2e: 0, // airplaneSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
              children: [
                {
                  name: 'International',
                  co2e: airplaneSum - nationalAirplaneSum,
                  category: Category.Mobility,
                  source:
                    'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
                  year: 2021,
                },
                {
                  name: 'National',
                  co2e: nationalAirplaneSum,
                  category: Category.Mobility,
                  source:
                    'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
                  year: 2021,
                },
              ],
            },
            {
              name: 'Car',
              co2e: carSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Truck',
              co2e: truckSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Delivery Van',
              co2e: deliveryVanSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Bus',
              co2e: busSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Motorcycle',
              co2e: motorcycleSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Ship',
              co2e: shipSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Train',
              co2e: trainSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Other',
              co2e: otherSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
          ],
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
          co2e:
            2190 -
            6400000000 / 8815400 -
            5900000000 / 8815400 -
            630000000 / 8815400,
          category: Category.Housing,
          source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
          year: 2024,
          children: [
            {
              name: 'Heating',
              co2e: 0,
              category: Category.Housing,
              source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
              year: 2024,
              children: [
                {
                  name: 'Oil',
                  co2e: 6400000000 / 8815400,
                  category: Category.Housing,
                  source:
                    'https://www.bafu.admin.ch/bafu/de/home/themen/klima/zustand/daten/co2-statistik.html',
                  year: 2022,
                },
                {
                  name: 'Gas',
                  co2e: 5900000000 / 8815400,
                  category: Category.Housing,
                  source:
                    'https://www.bafu.admin.ch/bafu/de/home/themen/klima/zustand/daten/co2-statistik.html',
                  year: 2022,
                },
                {
                  name: 'Others',
                  co2e: 630000000 / 8815400,
                  category: Category.Housing,
                  source:
                    'https://www.bafu.admin.ch/bafu/de/home/themen/klima/zustand/daten/co2-statistik.html',
                  year: 2022,
                },
              ],
            },
          ],
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
        // {
        //   name: 'b',
        //   color: 'red',
        //   children: [
        //     {
        //       name: 'ba',
        //       color: 'orange',
        //       size: 1,
        //     },
        //     {
        //       name: 'bb',
        //       color: 'blue',
        //       children: [
        //         {
        //           name: 'bba',
        //           color: 'green',
        //           size: 1,
        //         },
        //         {
        //           name: 'bbb',
        //           color: 'pink',
        //           size: 1,
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
    };

    Sunburst()
      .data(sbdata)
      .size('co2e')
      .color((d) => categoryColor[(d as Data).category] || 'lightgrey')
      .height(500)
      .showLabels(true)
      .tooltipContent((d, node) => `Size: <i>${node.value}</i>`)(
      this.chart.nativeElement
    );
  }
}

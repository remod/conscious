import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Sunburst from 'sunburst-chart';
import { DataNode } from 'sunburst-chart';
import { Category, categoryColor } from '../Category';

interface Data extends DataNode {
  name: string;
  co2_eq: number;
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

const nutritionSum: number = 2110;
const foodWasteSum: number = 482;
const consumedFoodSum: number = nutritionSum - foodWasteSum;
const meatFishSum: number = consumedFoodSum * 0.29;
const beveragesSum: number = consumedFoodSum * 0.21;
const milkCheeseEggsSum: number = consumedFoodSum * 0.17;
const fatOilsSum: number = consumedFoodSum * 0.1;
const grainsSum: number = consumedFoodSum * 0.08;
const transportDistributionPackagingSum: number = consumedFoodSum * 0.08;
const vegetablesFruitsSum: number = consumedFoodSum * 0.06;
const vegetableProteinSum: number = consumedFoodSum * 0.01;

const numInhabitants2022: number = 8815400;

@Component({
  selector: 'footprint-sunburst-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  standalone: true,
})
export class FootprintSunburstChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) chart!: ElementRef;

  constructor() { }

  ngOnInit() {
    const sbdata = {
      name: '',
      color: 'white',
      children: [
        {
          name: 'Mobility',
          co2_eq: 0, // 4140,
          category: Category.Mobility,
          source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
          year: 2024,
          children: [
            {
              name: 'Airplane',
              co2_eq: 0, // airplaneSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
              children: [
                {
                  name: 'International',
                  co2_eq: airplaneSum - nationalAirplaneSum,
                  category: Category.Mobility,
                  source:
                    'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
                  year: 2021,
                },
                {
                  name: 'National',
                  co2_eq: nationalAirplaneSum,
                  category: Category.Mobility,
                  source:
                    'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
                  year: 2021,
                },
              ],
            },
            {
              name: 'Car',
              co2_eq: carSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Truck',
              co2_eq: truckSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Delivery Van',
              co2_eq: deliveryVanSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Bus',
              co2_eq: busSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Motorcycle',
              co2_eq: motorcycleSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Ship',
              co2_eq: shipSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Train',
              co2_eq: trainSum,
              category: Category.Mobility,
              source:
                'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
              year: 2021,
            },
            {
              name: 'Other',
              co2_eq: otherSum,
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
          co2_eq:
            3800 /*- (11000000000 + 3468000000) / numInhabitants2022*/ -
            890 -
            740 -
            680 -
            680 -
            480 -
            330,
          category: Category.Consumption,
          source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
          year: 2024,
          children: [
            // {
            //   name: 'Construction',
            //   co2_eq: 11000000000 / numInhabitants2022,
            //   category: Category.Consumption,
            //   source:
            //     'https://www.swissbau.ch/de/c/wie-kann-die-bauwirtschaft-die-treibhausgasemissionen-senken.44328',
            //   year: 0,
            // },
            {
              name: 'Furniture and Household Devices',
              co2_eq: 890,
              category: Category.Consumption,
              source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
              year: 0,
            },
            {
              name: 'Spare Time and Culture, e.g. Pets, Fitness, Magazines, Cinema, Entertainment Devices, etc.',
              co2_eq: 740,
              category: Category.Consumption,
              source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
              year: 0,
            },
            {
              name: 'Restaurants and Hotels',
              co2_eq: 680,
              category: Category.Consumption,
              source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
              year: 0,
            },
            {
              name: 'Construction',
              co2_eq: 680,
              category: Category.Consumption,
              source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
              year: 0,
            },
            {
              name: 'Other Consumption, e.g. Hygiene Products, Cosmetics, Medication, Education, etc.',
              co2_eq: 480,
              category: Category.Consumption,
              source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
              year: 0,
            },
            {
              name: 'Clothing and Shoes',
              co2_eq: 330,
              category: Category.Consumption,
              source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
              year: 0,
            },
            // {
            //   name: 'Clothing',
            //   co2_eq: 3468000000 / numInhabitants2022,
            //   category: Category.Consumption,
            //   source:
            //     'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/20967b15-infras_zusammenfassung-laengere-nutzungsdauer_de_20220322.pdf',
            //   year: 2022,
            // },
            // {
            //   name: 'Furniture',
            //   co2_eq: 643000000 / numInhabitants2022,
            //   category: Category.Consumption,
            //   source:
            //     'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/20967b15-infras_zusammenfassung-laengere-nutzungsdauer_de_20220322.pdf',
            //   year: 2022,
            // },
            // {
            //   name: 'Notebooks',
            //   co2_eq: 296000000 / numInhabitants2022,
            //   category: Category.Consumption,
            //   source:
            //     'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/20967b15-infras_zusammenfassung-laengere-nutzungsdauer_de_20220322.pdf',
            //   year: 2022,
            // },
            // {
            //   name: 'Smartphones',
            //   co2_eq: 162000000 / numInhabitants2022,
            //   category: Category.Consumption,
            //   source:
            //     'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/20967b15-infras_zusammenfassung-laengere-nutzungsdauer_de_20220322.pdf',
            //   year: 2022,
            // },
            // {
            //   name: 'Washing Machines',
            //   co2_eq: 63000000 / numInhabitants2022,
            //   category: Category.Consumption,
            //   source:
            //     'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/20967b15-infras_zusammenfassung-laengere-nutzungsdauer_de_20220322.pdf',
            //   year: 2022,
            // },
          ],
        },
        {
          name: 'Housing and Energy',
          co2_eq:
            2190 - (6400000000 + 5900000000 + 630000000) / numInhabitants2022,
          category: Category.Housing,
          source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
          year: 2024,
          children: [
            {
              name: 'Heating',
              co2_eq: 0,
              category: Category.Housing,
              source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
              year: 2024,
              children: [
                {
                  // TODO: Does not contain the heater itself.
                  name: 'Oil',
                  co2_eq: 6400000000 / numInhabitants2022,
                  category: Category.Housing,
                  source:
                    'https://www.bafu.admin.ch/bafu/de/home/themen/klima/zustand/daten/co2-statistik.html',
                  year: 2022,
                },
                {
                  // TODO: Does not contain the heater itself.
                  name: 'Gas',
                  co2_eq: 5900000000 / numInhabitants2022,
                  category: Category.Housing,
                  source:
                    'https://www.bafu.admin.ch/bafu/de/home/themen/klima/zustand/daten/co2-statistik.html',
                  year: 2022,
                },
                {
                  // TODO: Does not contain the heater itself.
                  name: 'Others',
                  co2_eq: 630000000 / numInhabitants2022,
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
          co2_eq: 0,
          category: Category.Nutrition,
          source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
          year: 2024,
          children: [
            {
              name: 'Food Waste',
              co2_eq: foodWasteSum,
              category: Category.Nutrition,
              source:
                'https://www.bafu.admin.ch/dam/bafu/de/dokumente/abfall/externe-studien-berichte/lebensmittelverluste-in-der-schweiz-umweltbelastung-und-verminderungspotenzial.pdf.download.pdf/ETH-Bericht_Foodwaste_FINAL.pdf',
              year: 2019,
            },
            {
              name: 'Meat and Fish',
              co2_eq:
                meatFishSum - (10.98 + 2.17) * 13.3 - 20.7 * 3.4 - 14.99 * 3.4,
              category: Category.Nutrition,
              source:
                'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
              year: 2017,
              children: [
                {
                  name: 'Beef and Veal',
                  co2_eq: (10.98 + 2.17) * 13.3,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
                {
                  name: 'Pork',
                  co2_eq: 20.7 * 3.4,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
                {
                  name: 'Chicken',
                  co2_eq: 14.99 * 3.4,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
              ],
            },
            {
              name: 'Beverages',
              co2_eq: beveragesSum - 17.42 * 2.3 - 9.49 * 2.4,
              category: Category.Nutrition,
              source:
                'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
              year: 2017,
              children: [
                {
                  name: 'Red Wine',
                  co2_eq: 17.42 * 2.3,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
                {
                  name: 'White Wine',
                  co2_eq: 9.49 * 2.4,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
              ],
            },
            {
              // TODO: milkCheeseEggsSum seems to be too small compared to the sum of the children.
              name: 'Milk, Cheese, Eggs',
              co2_eq:
                milkCheeseEggsSum -
                22.9 * 8.5 -
                5.3 * 23.8 -
                46.0 * 1.4 -
                7.78 * 7.6 -
                185.6 * 0.06 * 2.0 -
                15.3 * 1.2,
              category: Category.Nutrition,
              source:
                'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
              year: 2017,
              children: [
                {
                  name: 'Cheese',
                  co2_eq: 22.9 * 8.5,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
                {
                  name: 'Butter',
                  co2_eq: 5.3 * 23.8,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
                {
                  name: 'Milk',
                  co2_eq: 46.0 * 1.4,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
                {
                  name: 'Cream',
                  co2_eq: 7.78 * 7.6,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
                {
                  name: 'Eggs',
                  co2_eq:
                    185.6 *
                    0.06 * // https://www.swissmilk.ch/de/rezepte-kochideen/tipps-tricks/wie-viel-wiegt-ein-ei/
                    2.0,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
                {
                  name: 'Joghurt',
                  co2_eq: 15.3 * 1.2,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
              ],
            },
            {
              name: 'Fat and Oils',
              co2_eq: fatOilsSum,
              category: Category.Nutrition,
              source:
                'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
              year: 2017,
            },
            {
              name: 'Grains',
              co2_eq: grainsSum,
              category: Category.Nutrition,
              source:
                'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
              year: 2017,
            },
            {
              name: 'Transport, Distribution, Packaging',
              co2_eq: transportDistributionPackagingSum,
              category: Category.Nutrition,
              source:
                'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
              year: 2017,
            },
            {
              name: 'Vegetables and Fruits',
              co2_eq: vegetablesFruitsSum,
              category: Category.Nutrition,
              source:
                'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
              year: 2017,
            },
            {
              name: 'Vegetable Protein',
              co2_eq: vegetableProteinSum,
              category: Category.Nutrition,
              source:
                'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
              year: 2017,
            },
          ],
        },
        {
          name: 'Public Services',
          co2_eq: 1280,
          category: Category.PublicServices,
          source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
          year: 2024,
        },
      ],
    };

    Sunburst()
      .data(sbdata)
      .size('co2_eq')
      .color((d) => categoryColor[(d as Data).category] || 'lightgrey')
      .height(900)
      .showLabels(true)
      .tooltipContent((d, node) => `CO2-eq: <i>${node.value}</i>`)(
        this.chart.nativeElement
      );
  }
}

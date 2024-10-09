import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Sunburst from 'sunburst-chart';
import { DataNode } from 'sunburst-chart';
import { Category, categoryColor } from '../Category';
import {
  consumption,
  footprint,
  ground_transport_fractions,
  heating,
  mobility_fractions,
} from '../../data/Data';
import {
  eggs_bought,
  product_weight,
  food_waste_fractions,
  meat_bought,
  milk_products_bought,
  nutrition,
  nutrition_fractions,
} from '../../data/Nutrition';

const airplane: number = footprint.data_points.mobility.value * mobility_fractions.data_points.airplane.value;
const ground: number = footprint.data_points.mobility.value * mobility_fractions.data_points.ground.value;
const car: number = ground * ground_transport_fractions.data_points.car.value;
const truck: number = ground * ground_transport_fractions.data_points.truck.value;
const delivery_van: number = ground * ground_transport_fractions.data_points.delivery_van.value;
const bus: number = ground * ground_transport_fractions.data_points.bus.value;
const motorcycle: number = ground * ground_transport_fractions.data_points.motorcycle.value;
const ship: number = ground * ground_transport_fractions.data_points.ship.value;
const train: number = ground * ground_transport_fractions.data_points.train.value;

const wasted_food: number = footprint.data_points.nutrition.value * food_waste_fractions.data_points.wasted_food.value;
const consumed_food: number = footprint.data_points.nutrition.value * food_waste_fractions.data_points.consumed_food.value;
const meat_fish: number = consumed_food * nutrition_fractions.data_points.meat_fish.value;
const beverages: number = consumed_food * nutrition_fractions.data_points.beverages.value;
const milk_cheese_eggs: number = consumed_food * nutrition_fractions.data_points.milk_cheese_eggs.value;
const fat_oils: number = consumed_food * nutrition_fractions.data_points.fat_oils.value;
const grains: number = consumed_food * nutrition_fractions.data_points.grains.value;
const transport_distributions_packaging: number = consumed_food * nutrition_fractions.data_points.transport_distribution_packaging.value;
const vegetables_fruits: number = consumed_food * nutrition_fractions.data_points.vegetables_fruits.value;
const vegetable_protein: number = consumed_food * nutrition_fractions.data_points.vegetable_protein.value;

interface Data extends DataNode {
  name: string;
  co2_eq: number;
  category: Category;
}

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
          co2_eq: footprint.data_points.mobility.value - airplane - car - truck - delivery_van - bus - motorcycle - ship - train,
          category: Category.Mobility,
          children: [
            {
              name: 'Airplane',
              co2_eq: airplane,
              category: Category.Mobility,
            },
            {
              name: 'Car',
              co2_eq: car,
              category: Category.Mobility,
            },
            {
              name: 'Truck',
              co2_eq: truck,
              category: Category.Mobility,
            },
            {
              name: 'Delivery Van',
              co2_eq: delivery_van,
              category: Category.Mobility,
            },
            {
              name: 'Bus',
              co2_eq: bus,
              category: Category.Mobility,
            },
            {
              name: 'Motorcycle',
              co2_eq: motorcycle,
              category: Category.Mobility,
            },
            {
              name: 'Ship',
              co2_eq: ship,
              category: Category.Mobility,
            },
            {
              name: 'Train',
              co2_eq: train,
              category: Category.Mobility,
            },
          ],
        },
        {
          name: 'Consumption (non Food)',
          co2_eq: 0,
          category: Category.Consumption,
          children: [
            {
              name: 'Furniture and Household Devices',
              co2_eq: consumption.data_points.furniture_household_devices.value,
              category: Category.Consumption,
            },
            {
              name: 'Spare Time and Culture, e.g. Pets, Fitness, Magazines, Cinema, Entertainment Devices, etc.',
              co2_eq: consumption.data_points.spare_time_culture.value,
              category: Category.Consumption,
            },
            {
              name: 'Restaurants and Hotels',
              co2_eq: consumption.data_points.restaurants_hotels.value,
              category: Category.Consumption,
            },
            {
              name: 'Construction',
              co2_eq: consumption.data_points.construction.value,
              category: Category.Consumption,
            },
            {
              name: 'Other Consumption, e.g. Hygiene Products, Cosmetics, Medication, Education, etc.',
              co2_eq: consumption.data_points.other_consumption.value,
              category: Category.Consumption,
            },
            {
              name: 'Clothing and Shoes',
              co2_eq: consumption.data_points.clothing_shoes.value,
              category: Category.Consumption,
            },
          ],
        },
        {
          name: 'Housing and Energy',
          co2_eq:
            footprint.data_points.housing.value - heating.data_points.oil.value - heating.data_points.gas.value - heating.data_points.others.value,
          category: Category.Housing,
          children: [
            {
              name: 'Heating',
              co2_eq: 0,
              category: Category.Housing,
              children: [
                {
                  name: 'Oil',
                  co2_eq: heating.data_points.oil.value,
                  category: Category.Housing,
                },
                {
                  name: 'Gas',
                  co2_eq: heating.data_points.gas.value,
                  category: Category.Housing,
                },
                {
                  name: 'Others',
                  co2_eq: heating.data_points.others.value,
                  category: Category.Housing,
                },
              ],
            },
          ],
        },
        {
          name: 'Nutrition',
          co2_eq: 0,
          category: Category.Nutrition,
          children: [
            {
              name: 'Food Waste',
              co2_eq: wasted_food,
              category: Category.Nutrition,
            },
            {
              name: 'Meat and Fish',
              co2_eq:
                meat_fish -
                food_waste_fractions.data_points.consumed_food.value *
                (meat_bought.data_points.beef.value + meat_bought.data_points.veal.value) * nutrition.data_points.beef.value -
                food_waste_fractions.data_points.consumed_food.value * meat_bought.data_points.pork.value * nutrition.data_points.pork.value -
                food_waste_fractions.data_points.consumed_food.value * meat_bought.data_points.chicken.value * nutrition.data_points.chicken.value,
              category: Category.Nutrition,
              children: [
                {
                  name: 'Beef and Veal',
                  co2_eq:
                    food_waste_fractions.data_points.consumed_food.value *
                    (meat_bought.data_points.beef.value + meat_bought.data_points.veal.value) *
                    nutrition.data_points.beef.value,
                  category: Category.Nutrition,
                },
                {
                  name: 'Pork',
                  co2_eq:
                    food_waste_fractions.data_points.consumed_food.value *
                    meat_bought.data_points.pork.value *
                    nutrition.data_points.pork.value,
                  category: Category.Nutrition,
                },
                {
                  name: 'Chicken',
                  co2_eq:
                    food_waste_fractions.data_points.consumed_food.value *
                    meat_bought.data_points.chicken.value *
                    nutrition.data_points.chicken.value,
                  category: Category.Nutrition,
                },
              ],
            },
            {
              name: 'Beverages',
              co2_eq:
                beverages -
                food_waste_fractions.data_points.consumed_food.value * 17.42 * nutrition.data_points.wine.value -
                food_waste_fractions.data_points.consumed_food.value * 9.49 * nutrition.data_points.wine.value,
              category: Category.Nutrition,
              children: [
                {
                  name: 'Red Wine',
                  co2_eq:
                    food_waste_fractions.data_points.consumed_food.value * 17.42 *
                    nutrition.data_points.wine.value,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
                {
                  name: 'White Wine',
                  co2_eq:
                    food_waste_fractions.data_points.consumed_food.value * 9.49 *
                    nutrition.data_points.wine.value,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
              ],
            },
            {
              // TODO: milk_cheese_eggs seems to be too small compared to the sum of the children.
              name: 'Milk, Cheese, Eggs',
              co2_eq:
                milk_cheese_eggs -
                food_waste_fractions.data_points.consumed_food.value * milk_products_bought.data_points.cheese.value * nutrition.data_points.cheese.value -
                food_waste_fractions.data_points.consumed_food.value * milk_products_bought.data_points.butter.value * nutrition.data_points.butter.value -
                food_waste_fractions.data_points.consumed_food.value * milk_products_bought.data_points.milk.value * nutrition.data_points.milk.value -
                food_waste_fractions.data_points.consumed_food.value * eggs_bought.data_points.eggs.value * product_weight.data_points.eggs.value * nutrition.data_points.eggs.value,
              category: Category.Nutrition,
              children: [
                {
                  name: 'Cheese',
                  co2_eq:
                    food_waste_fractions.data_points.consumed_food.value *
                    milk_products_bought.data_points.cheese.value *
                    nutrition.data_points.cheese.value,
                  category: Category.Nutrition,
                },
                {
                  name: 'Milk',
                  co2_eq:
                    food_waste_fractions.data_points.consumed_food.value *
                    milk_products_bought.data_points.milk.value *
                    nutrition.data_points.milk.value,
                  category: Category.Nutrition,
                },
                {
                  name: 'Butter',
                  co2_eq:
                    food_waste_fractions.data_points.consumed_food.value *
                    milk_products_bought.data_points.butter.value *
                    nutrition.data_points.butter.value,
                  category: Category.Nutrition,
                },
                {
                  name: 'Eggs',
                  co2_eq:
                    food_waste_fractions.data_points.consumed_food.value *
                    eggs_bought.data_points.eggs.value *
                    product_weight.data_points.eggs.value *
                    2.0,
                  category: Category.Nutrition,
                },
              ],
            },
            {
              name: 'Fat and Oils',
              co2_eq: fat_oils,
              category: Category.Nutrition,
            },
            {
              name: 'Grains',
              co2_eq: grains,
              category: Category.Nutrition,
            },
            {
              name: 'Transport, Distribution, Packaging',
              co2_eq: transport_distributions_packaging,
              category: Category.Nutrition,
            },
            {
              name: 'Vegetables and Fruits',
              co2_eq: vegetables_fruits,
              category: Category.Nutrition,
            },
            {
              name: 'Vegetable Protein',
              co2_eq: vegetable_protein,
              category: Category.Nutrition,
            },
          ],
        },
        {
          name: 'Public Services',
          co2_eq: footprint.data_points.public_services.value,
          category: Category.PublicServices,
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

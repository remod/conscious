
import { DataSource, DataPoint } from './Interfaces';

interface NutritionAyceDataSource extends DataSource {
  data_points: {
    water: DataPoint;
    peas: DataPoint;
    potatoes: DataPoint;
    margarine: DataPoint;
    pumpkin: DataPoint;
    spinach: DataPoint;
    lentils: DataPoint;
    nuts: DataPoint;
    pasta: DataPoint;
    black_tea: DataPoint;
    carrots: DataPoint;
    pea_based_meat_substitute: DataPoint;
    apples: DataPoint;
    bread: DataPoint;
    oat_milk: DataPoint;
    mackerel: DataPoint;
    bananas: DataPoint;
    strawberries: DataPoint;
    dark_chocolate: DataPoint;
    avocado: DataPoint;
    cucumbers: DataPoint;
    tomatoes: DataPoint;
    porcini_mushrooms: DataPoint;
    apple_juice: DataPoint;
    oranges: DataPoint;
    tofu: DataPoint;
    milk_chocolate: DataPoint;
    beer: DataPoint;
    coffee: DataPoint;
    chicken: DataPoint;
    eggs: DataPoint;
    rice: DataPoint;
    aubergine_season_local: DataPoint;
    tuna: DataPoint;
    cheese: DataPoint;
    dates: DataPoint;
    green_asparagus: DataPoint;
    butter: DataPoint;
    milk: DataPoint;
    pork: DataPoint;
    aubergine_offseason_spain: DataPoint;
    french_fries: DataPoint;
    salmon: DataPoint;
    natural_yogurt: DataPoint;
    orange_juice: DataPoint;
    mushrooms: DataPoint;
    wine: DataPoint;
    aubergine_offseason_local: DataPoint;
    beef: DataPoint;
    veal: DataPoint;
    aubergine_offseason_thailand: DataPoint;
  };
}

export const nutrition_ayce: NutritionAyceDataSource = {
  name: 'Nutrition All You Can Eat for Climate',
  unit: 'g CO2-eq for 1/3 of daily needs',
  source: 'https://foodforfuturefreiburg.de/wp-content/uploads/2022/04/Eaternity-All-you-can-eat.pdf',
  year: 2022,
  data_points: {
    water: {
      name: 'Water',
      value: 0.002,
    },
    peas: {
      name: 'Peas',
      value: 118,
    },
    potatoes: {
      name: 'Potatoes',
      value: 144,
    },
    margarine: {
      name: 'Margarine',
      value: 157,
    },
    pumpkin: {
      name: 'Pumpkin',
      value: 181,
    },
    spinach: {
      name: 'Spinach',
      value: 182,
    },
    lentils: {
      name: 'Lentils',
      value: 186,
    },
    nuts: {
      name: 'Nuts',
      value: 220,
    },
    pasta: {
      name: 'Pasta',
      value: 247,
    },
    black_tea: {
      name: 'Black Tea',
      value: 265,
    },
    carrots: {
      name: 'Carrots',
      value: 295,
    },
    pea_based_meat_substitute: {
      name: 'Pea-based Meat Substitute',
      value: 299,
    },
    apples: {
      name: 'Apples',
      value: 323,
    },
    bread: {
      name: 'Bread',
      value: 343,
    },
    oat_milk: {
      name: 'Oat Milk',
      value: 367,
    },
    mackerel: {
      name: 'Mackerel',
      value: 385,
    },
    bananas: {
      name: 'Bananas',
      value: 409,
    },
    strawberries: {
      name: 'Strawberries',
      value: 423,
    },
    dark_chocolate: {
      name: 'Dark Chocolate',
      value: 437,
    },
    avocado: {
      name: 'Avocado',
      value: 457,
    },
    cucumbers: {
      name: 'Cucumbers',
      value: 501,
    },
    tomatoes: {
      name: 'Tomatoes',
      value: 505,
    },
    porcini_mushrooms: {
      name: 'Porcini Mushrooms',
      value: 617,
    },
    apple_juice: {
      name: 'Apple Juice',
      value: 621,
    },
    oranges: {
      name: 'Oranges',
      value: 626,
    },
    tofu: {
      name: 'Tofu',
      value: 643,
    },
    milk_chocolate: {
      name: 'Milk Chocolate',
      value: 650,
    },
    beer: {
      name: 'Beer',
      value: 770,
    },
    coffee: {
      name: 'Coffee',
      value: 868,
    },
    chicken: {
      name: 'Chicken',
      value: 894,
    },
    eggs: {
      name: 'Eggs',
      value: 923,
    },
    rice: {
      name: 'Rice',
      value: 933,
    },
    aubergine_season_local: {
      name: 'Aubergine (Seasonal, Local)',
      value: 983,
    },
    tuna: {
      name: 'Tuna',
      value: 1035,
    },
    cheese: {
      name: 'Cheese',
      value: 1300,
    },
    dates: {
      name: 'Dates',
      value: 1349,
    },
    green_asparagus: {
      name: 'Green Asparagus',
      value: 1368,
    },
    butter: {
      name: 'Butter',
      value: 1384,
    },
    milk: {
      name: 'Milk',
      value: 1554,
    },
    pork: {
      name: 'Pork',
      value: 1629,
    },
    aubergine_offseason_spain: {
      name: 'Aubergine (Offseason, Spain by Truck)',
      value: 1632,
    },
    french_fries: {
      name: 'French Fries',
      value: 1739,
    },
    salmon: {
      name: 'Salmon',
      value: 1757,
    },
    natural_yogurt: {
      name: 'Natural Yogurt',
      value: 1867,
    },
    orange_juice: {
      name: 'Orange Juice',
      value: 2248,
    },
    mushrooms: {
      name: 'Mushrooms',
      value: 2343,
    },
    wine: {
      name: 'Wine',
      value: 2359,
    },
    aubergine_offseason_local: {
      name: 'Aubergine (Offseason, Local)',
      value: 2465,
    },
    beef: {
      name: 'Beef',
      value: 5003,
    },
    veal: {
      name: 'Veal',
      value: 7925,
    },
    aubergine_offseason_thailand: {
      name: 'Aubergine (Offseason, Thailand by Airplane)',
      value: 13682,
    },
  },
};

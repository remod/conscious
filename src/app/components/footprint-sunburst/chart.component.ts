import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Sunburst from 'sunburst-chart';
import { DataNode } from 'sunburst-chart';
import { Category, categoryColor } from '../Category';
import { DataSource, DataPoint } from '../DataInterfaces';

interface PopulationDataSource extends DataSource {
  data_points: {
    at2022: DataPoint;
    at2023: DataPoint;
  }
}

const population: PopulationDataSource = {
  name: 'Population',
  unit: '-',
  source: 'https://www.bfs.admin.ch/bfs/de/home/statistiken/bevoelkerung.assetdetail.32374798.html',
  year: 2023,
  data_points:
  {
    at2022:
    {
      name: 'At 2022',
      value: 8815385,
    },
    at2023:
    {
      name: 'At 2023',
      value: 8962258,
    },
  },
};


interface FootprintDataSource extends DataSource {
  data_points: {
    mobility: DataPoint;
    consumption: DataPoint;
    housing: DataPoint;
    nutrition: DataPoint;
    public_services: DataPoint;
  };
}

const footprint: FootprintDataSource = {
  name: 'Footprint',
  unit: 'kg CO2-eq',
  source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
  year: 2024,
  data_points:
  {
    mobility:
    {
      name: 'Mobility',
      value: 4140,
    },
    consumption:
    {
      name: 'Consumption (non Food)',
      value: 3800,
    },
    housing:
    {
      name: 'Housing and Energy',
      value: 2190,
    },
    nutrition:
    {
      name: 'Nutrition',
      value: 2110,
    },
    public_services:
    {
      name: 'Public Services',
      value: 1280,
    },
  },
};

interface MobilityFractionsDataSource extends DataSource {
  data_points: {
    airplane: DataPoint;
    ground: DataPoint;
  }
}

const mobility_fractions: MobilityFractionsDataSource = {
  name: 'Mobility Fractions',
  unit: '% of Mobility',
  source: 'https://www.parlament.ch/de/ratsbetrieb/suche-curia-vista/geschaeft?AffairId=20214259',
  year: 2021,
  data_points:
  {
    airplane:
    {
      // Includes national & international, civil & military flights.
      name: 'Airplane Mobility',
      value: 0.27 / (0.27 + 0.23),
    },
    ground:
    {
      name: 'Ground Mobility',
      value: 0.23 / (0.27 + 0.23),
    },
  },
};

interface GroundTransportDataSource extends DataSource {
  data_points: {
    car: DataPoint;
    truck: DataPoint;
    delivery_van: DataPoint;
    bus: DataPoint;
    motorcycle: DataPoint;
    ship: DataPoint;
    train: DataPoint;
  }
}

// Division by (1.0 - 0.005) to account for the 0.5% of national airplane emissions which should not be included in the ground transport.
const ground_transport_fractions: GroundTransportDataSource = {
  name: 'Ground Transport',
  unit: '%',
  source: 'https://www.bfs.admin.ch/bfs/de/home/statistiken/mobilitaet-verkehr/unfaelle-umweltauswirkungen/umweltauswirkungen.html',
  year: 2021,
  data_points:
  {
    car:
    {
      name: 'Car',
      value: 0.723 / (1.0 - 0.005),
    },
    truck:
    {
      name: 'Truck',
      value: 0.121 / (1.0 - 0.005),
    },
    delivery_van:
    {
      name: 'Delivery Van',
      value: 0.084 / (1.0 - 0.005),
    },
    bus:
    {
      name: 'Bus',
      value: 0.03 / (1.0 - 0.005),
    },
    motorcycle:
    {
      name: 'Motorcycle',
      value: 0.017 / (1.0 - 0.005),
    },
    ship:
    {
      name: 'Ship',
      value: 0.008 / (1.0 - 0.005),
    },
    train:
    {
      name: 'Train',
      value: 0.002 / (1.0 - 0.005),
    },
  },
};

const airplane: number = footprint.data_points.mobility.value * mobility_fractions.data_points.airplane.value;
const ground: number = footprint.data_points.mobility.value * mobility_fractions.data_points.ground.value;
const car: number = ground * ground_transport_fractions.data_points.car.value;
const truck: number = ground * ground_transport_fractions.data_points.truck.value;
const delivery_van: number = ground * ground_transport_fractions.data_points.delivery_van.value;
const bus: number = ground * ground_transport_fractions.data_points.bus.value;
const motorcycle: number = ground * ground_transport_fractions.data_points.motorcycle.value;
const ship: number = ground * ground_transport_fractions.data_points.ship.value;
const train: number = ground * ground_transport_fractions.data_points.train.value;

interface ConsumptionDataSource extends DataSource {
  data_points: {
    furniture_household_devices: DataPoint;
    spare_time_culture: DataPoint;
    restaurants_hotels: DataPoint;
    construction: DataPoint;
    other_consumption: DataPoint;
    clothing_shoes: DataPoint;
  }
}

const consumption: ConsumptionDataSource = {
  name: 'Consumption (non Food)',
  unit: 'kg CO2-eq',
  source: 'https://www.wwf.ch/de/nachhaltig-leben/footprintrechner',
  year: 2024,
  data_points:
  {
    furniture_household_devices:
    {
      name: 'Furniture and Household Devices',
      value: 890,
    },
    spare_time_culture:
    {
      name: 'Spare Time and Culture',
      value: 740,
    },
    restaurants_hotels:
    {
      name: 'Restaurants and Hotels',
      value: 680,
    },
    construction:
    {
      name: 'Construction',
      value: 680,
    },
    other_consumption:
    {
      name: 'Other Consumption',
      value: 480,
    },
    clothing_shoes:
    {
      name: 'Clothing and Shoes',
      value: 330,
    },
  },
};

interface HeatingDataSource extends DataSource {
  data_points: {
    oil: DataPoint;
    gas: DataPoint;
    others: DataPoint;
  }
}

// Assumption: We ignore the grey energy of the heater itself.
const heating: HeatingDataSource = {
  name: 'Heating',
  unit: 'kg CO2-eq',
  source: 'https://www.bafu.admin.ch/bafu/de/home/themen/klima/zustand/daten/co2-statistik.html',
  year: 2023,
  data_points:
  {
    oil:
    {
      name: 'Oil',
      value: 6200000000 / population.data_points.at2023.value,
    },
    gas:
    {
      name: 'Gas',
      value: 5460000000 / population.data_points.at2023.value,
    },
    others:
    {
      name: 'Others',
      value: 560000000 / population.data_points.at2023.value,
    },
  },
};

interface FoodWasteFractionsDataSource extends DataSource {
  data_points: {
    wasted_food: DataPoint;
    consumed_food: DataPoint;
  }
}

const food_waste_fractions: FoodWasteFractionsDataSource = {
  name: 'Food Waste Fractions',
  unit: '% of Nutrition',
  source: 'https://www.bafu.admin.ch/dam/bafu/de/dokumente/abfall/externe-studien-berichte/lebensmittelverluste-in-der-schweiz-umweltbelastung-und-verminderungspotenzial.pdf.download.pdf/ETH-Bericht_Foodwaste_FINAL.pdf',
  year: 2019,
  data_points:
  {
    wasted_food:
    {
      name: 'Wasted Food',
      value: 0.24,
    },
    consumed_food:
    {
      name: 'Consumed Food',
      value: 0.76,
    },
  },
};

interface NutritionFractionsDataSource extends DataSource {
  data_points: {
    meat_fish: DataPoint;
    beverages: DataPoint;
    milk_cheese_eggs: DataPoint;
    fat_oils: DataPoint;
    grains: DataPoint;
    transport_distribution_packaging: DataPoint;
    vegetables_fruits: DataPoint;
    vegetable_protein: DataPoint;
  }
}

// Assumption: These fractions apply in the same way to consumed food and wasted food.
const nutrition_fractions: NutritionFractionsDataSource = {
  name: 'Nutrition Fractions',
  unit: '% of Nutrition',
  source: 'https://www.wwf.ch/sites/default/files/doc-2022-01/2021_Faktenblatt_Ern%C3%A4hrung_DE.pdf',
  year: 2017,
  data_points:
  {
    meat_fish:
    {
      name: 'Meat and Fish',
      value: 0.29,
    },
    beverages:
    {
      name: 'Beverages',
      value: 0.21,
    },
    milk_cheese_eggs:
    {
      name: 'Milk, Cheese, Eggs',
      value: 0.17,
    },
    fat_oils:
    {
      name: 'Fat and Oils',
      value: 0.1,
    },
    grains:
    {
      name: 'Grains',
      value: 0.08,
    },
    transport_distribution_packaging:
    {
      name: 'Transport, Distribution, Packaging',
      value: 0.08,
    },
    vegetables_fruits:
    {
      name: 'Vegetables and Fruits',
      value: 0.06,
    },
    vegetable_protein:
    {
      name: 'Vegetable Protein',
      value: 0.01,
    },
  },
};

interface MeatWeigthDataSource extends DataSource {
  data_points: {
    beef: DataPoint;
    veal: DataPoint;
    pork: DataPoint;
    chicken: DataPoint;
    fish_seafood: DataPoint;
  }
}

// Does not include "shopping tourism".
const meat_weight: MeatWeigthDataSource = {
  name: 'Meat Weight',
  unit: 'kg',
  // Overview: https://www.agrarbericht.ch/de/markt/tierische-produktion/fleisch-und-eier
  source: 'https://www.proviande.ch/sites/proviande/files/2020-05/Der%20Fleischmarkt%20im%20%C3%9Cberblick%20-%20Aktuelle%20Ausgabe.pdf',
  year: 2022,
  data_points:
  {
    beef:
    {
      name: 'Beef',
      value: 10.98,
    },
    veal:
    {
      name: 'Veal',
      value: 2.17,
    },
    pork:
    {
      name: 'Pork',
      value: 20.7,
    },
    chicken:
    {
      name: 'Chicken',
      value: 14.99,
    },
    fish_seafood:
    {
      name: 'Fish and Seafood',
      value: 8.87,
    },
  },
};

interface EggsNumberDataSource extends DataSource {
  data_points: {
    eggs: DataPoint;
  }
}

const eggs_number: EggsNumberDataSource = {
  name: 'Egg Number',
  unit: '-',
  // Overview: https://www.agrarbericht.ch/de/markt/tierische-produktion/fleisch-und-eier
  source: 'https://www.aviforum.ch/Portaldata/1/Resources/wissen/statistiken/de/FB_11_2_23.pdf',
  year: 2022,
  data_points:
  {
    eggs:
    {
      name: 'Eggs',
      value: 185.6,
    },
  },
};

interface EggsWeightDataSource extends DataSource {
  data_points: {
    eggs: DataPoint;
  }
}

const eggs_weight: EggsWeightDataSource = {
  name: 'Egg Weight',
  unit: 'kg',
  source: 'https://www.swissmilk.ch/de/rezepte-kochideen/tipps-tricks/wie-viel-wiegt-ein-ei/',
  year: 2022,
  data_points:
  {
    eggs:
    {
      name: 'Eggs',
      value: 0.06,
    },
  },
};

interface MilkProductsWeightDataSource extends DataSource {
  data_points: {
    cheese: DataPoint;
    butter: DataPoint;
    milk: DataPoint;
  }
}

const milk_products_weight: MilkProductsWeightDataSource = {
  name: 'Milk Products Weight',
  unit: 'kg',
  // Overview: https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte
  // Attention: The value for yogurt seems to be wrong in the table, because the PDF says it's VMA and not kg.
  source: 'https://www.sbv-usp.ch/fileadmin/user_upload/MISTA2022_def_online.pdf',
  year: 2022,
  data_points:
  {
    cheese:
    {
      name: 'Cheese',
      value: 22.9,
    },
    butter:
    {
      name: 'Butter',
      value: 5.3,
    },
    milk:
    {
      name: 'Milk',
      value: 46.0,
    },
  },
};

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
                (meat_weight.data_points.beef.value + meat_weight.data_points.veal.value) * 13.3 -
                food_waste_fractions.data_points.consumed_food.value * meat_weight.data_points.pork.value * 3.4 -
                food_waste_fractions.data_points.consumed_food.value * meat_weight.data_points.chicken.value * 3.4,
              category: Category.Nutrition,
              children: [
                {
                  name: 'Beef and Veal',
                  co2_eq: food_waste_fractions.data_points.consumed_food.value *
                    (meat_weight.data_points.beef.value + meat_weight.data_points.veal.value) * 13.3,
                  category: Category.Nutrition,
                },
                {
                  name: 'Pork',
                  co2_eq: food_waste_fractions.data_points.consumed_food.value * meat_weight.data_points.pork.value * 3.4,
                  category: Category.Nutrition,
                },
                {
                  name: 'Chicken',
                  co2_eq: food_waste_fractions.data_points.consumed_food.value * meat_weight.data_points.chicken.value * 3.4,
                  category: Category.Nutrition,
                },
              ],
            },
            {
              name: 'Beverages',
              co2_eq:
                beverages -
                food_waste_fractions.data_points.consumed_food.value * 17.42 * 2.3 -
                food_waste_fractions.data_points.consumed_food.value * 9.49 * 2.4,
              category: Category.Nutrition,
              children: [
                {
                  name: 'Red Wine',
                  co2_eq: food_waste_fractions.data_points.consumed_food.value * 17.42 * 2.3,
                  category: Category.Nutrition,
                  source:
                    'https://www.agrarbericht.ch/de/markt/tierische-produktion/milch-und-milchprodukte',
                  year: 2022,
                },
                {
                  name: 'White Wine',
                  co2_eq: food_waste_fractions.data_points.consumed_food.value * 9.49 * 2.4,
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
                food_waste_fractions.data_points.consumed_food.value * milk_products_weight.data_points.cheese.value * 8.5 -
                food_waste_fractions.data_points.consumed_food.value * milk_products_weight.data_points.butter.value * 23.8 -
                food_waste_fractions.data_points.consumed_food.value * milk_products_weight.data_points.milk.value * 1.4 -
                food_waste_fractions.data_points.consumed_food.value * eggs_number.data_points.eggs.value * eggs_weight.data_points.eggs.value * 2.0,
              category: Category.Nutrition,
              children: [
                {
                  name: 'Cheese',
                  co2_eq: food_waste_fractions.data_points.consumed_food.value * milk_products_weight.data_points.cheese.value * 8.5,
                  category: Category.Nutrition,
                },
                {
                  name: 'Butter',
                  co2_eq: food_waste_fractions.data_points.consumed_food.value * milk_products_weight.data_points.butter.value * 23.8,
                  category: Category.Nutrition,
                },
                {
                  name: 'Milk',
                  co2_eq: food_waste_fractions.data_points.consumed_food.value * milk_products_weight.data_points.milk.value * 1.4,
                  category: Category.Nutrition,
                },
                {
                  name: 'Eggs',
                  co2_eq:
                    food_waste_fractions.data_points.consumed_food.value *
                    eggs_number.data_points.eggs.value *
                    eggs_weight.data_points.eggs.value *
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

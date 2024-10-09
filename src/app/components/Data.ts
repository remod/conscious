import { DataSource, DataPoint } from './DataInterfaces';

interface PopulationDataSource extends DataSource {
  data_points: {
    at2022: DataPoint;
    at2023: DataPoint;
  }
}

export const population: PopulationDataSource = {
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

export const footprint: FootprintDataSource = {
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

export const mobility_fractions: MobilityFractionsDataSource = {
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
export const ground_transport_fractions: GroundTransportDataSource = {
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

export const consumption: ConsumptionDataSource = {
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
export const heating: HeatingDataSource = {
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

export const food_waste_fractions: FoodWasteFractionsDataSource = {
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
export const nutrition_fractions: NutritionFractionsDataSource = {
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
export const meat_bought: MeatWeigthDataSource = {
  name: 'Meat bought',
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

export const eggs_bought: EggsNumberDataSource = {
  name: 'Egg bought',
  unit: 'units',
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

export const product_weight: EggsWeightDataSource = {
  name: 'Product Weight',
  unit: 'kg / unit',
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

export const milk_products_bought: MilkProductsWeightDataSource = {
  name: 'Milk Products bought',
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

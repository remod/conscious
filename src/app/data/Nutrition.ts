import { DataSource, DataPoint } from './Interfaces';

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

interface DietFractionsDataSource extends DataSource {
  data_points: {
    standard: DataPoint;
    vegan: DataPoint;
    vegetarian: DataPoint;
    flexitarian: DataPoint;
  }
}

export const diet_fractions: DietFractionsDataSource = {
  name: 'Diet Fractions',
  unit: '% of CO2-eq',
  source: 'https://www.wwf.ch/sites/default/files/doc-2023-04/Faktenblatt_Ern%C3%A4hrung_DE.pdf',
  year: 2015,
  data_points:
  {
    standard:
    {
      name: 'Standard',
      value: 1.0,
    },
    vegan:
    {
      name: 'Vegan',
      value: 0.6,
    },
    vegetarian:
    {
      name: 'Vegetarian',
      value: 0.7,
    },
    flexitarian:
    {
      name: 'Flexitarian',
      value: 0.85,
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

interface NutritionDataSource extends DataSource {
  data_points: {
    beef: DataPoint;
    pork: DataPoint;
    chicken: DataPoint;
    wine: DataPoint;
    cheese: DataPoint;
    butter: DataPoint;
    milk: DataPoint;
    eggs: DataPoint;
  }
}

export const nutrition: NutritionDataSource = {
  name: 'Nutrition',
  unit: 'kg CO2-eq / kg',
  source: 'https://www.ifeu.de/fileadmin/uploads/Reinhardt-Gaertner-Wagner-2020-Oekologische-Fu%C3%9Fabdruecke-von-Lebensmitteln-und-Gerichten-in-Deutschland-ifeu-2020.pdf',
  year: 2020,
  data_points:
  {
    beef: {
      name: 'Beef',
      value: 13.6,
    },
    pork: {
      name: 'Pork',
      value: 4.6,
    },
    chicken: {
      name: 'Chicken',
      value: 5.5,
    },
    wine: {
      name: 'Wine',
      value: 1.0,
    },
    cheese: {
      name: 'Cheese',
      value: 5.7,
    },
    butter: {
      name: 'Butter',
      value: 9.0,
    },
    milk: {
      name: 'Milk',
      value: 1.4,
    },
    eggs: {
      name: 'Eggs',
      value: 3.0,
    },
  },
};

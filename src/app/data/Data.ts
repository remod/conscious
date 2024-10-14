import { DataSource, DataPoint } from './Interfaces';

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

export const footprint_sum = Object.values(footprint.data_points).reduce((sum, data_point) => sum + data_point.value, 0);

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

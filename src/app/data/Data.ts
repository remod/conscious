import { DataSource, DataPoint } from './Interfaces';

// Plane: 9000 km / year.
// Car: 10400 km / year.
// 2015
// https://www.are.admin.ch/dam/are/de/dokumente/verkehr/dokumente/mikrozensus/verkehrsverhalten-der-bevolkerung-2015.pdf.download.pdf/Verkehrsverhalten%20der%20Bev%C3%B6lkerung%202015.pdf

// E-Waste: 23.4 kg / year.
// 2024
// https://api.globalewaste.org/publications/file/297/Global-E-waste-Monitor-2024.pdf

// Clothing: 60 pieces / year.
// 2024
// https://www.tagesanzeiger.ch/altkleider-sammlung-nur-wenig-kleider-werden-recycelt-529856152838

// Switzerland has the 11th highest CO2 emissions per capita in the world (2022).
// https://ourworldindata.org/grapher/consumption-co2-per-capita-equity?tab=table&time=2022

// World map.
// https://en.m.wikipedia.org/wiki/File:BlankMap-World.svg

// Tipping points.
// https://en.wikipedia.org/wiki/Tipping_points_in_the_climate_system
// https://www.carbonbrief.org/explainer-nine-tipping-points-that-could-be-triggered-by-climate-change/
// https://report-2023.global-tipping-points.org/section2/2-tipping-point-impacts/2-2-assessing-impacts-of-earth-system-tipping-points-on-human-societies/2-2-5-potential-for-earth-system-tipping-points-to-magnify-or-accelerate-impacts-of-global-warming/

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

interface HouseholdSizeDataSource extends DataSource {
  data_points: {
    at2022: DataPoint;
  }
}

export const household_size: HouseholdSizeDataSource = {
  name: 'Household Size',
  unit: '-',
  source: 'https://www.bfs.admin.ch/news/de/2022-0544',
  year: 2022,
  data_points:
  {
    at2022:
    {
      name: 'At 2022',
      value: 2.19,
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

interface TransportEfficiencyDataSource extends DataSource {
  data_points: {
    plane: DataPoint;
    fossil_car: DataPoint;
    hybrid_car: DataPoint;
    electric_car_ch: DataPoint;
    electric_car_eco: DataPoint;
    bus: DataPoint;
    train_neighbor_countries_avg: DataPoint;
    public_transport_avg: DataPoint;
    e_bike: DataPoint;
    bike: DataPoint;
    train_ch: DataPoint;
  }
}

export const transport_efficiency: TransportEfficiencyDataSource = {
  name: 'Transport Efficiency',
  unit: 'g CO2-eq / km / person',
  source: 'https://www.wwf.ch/de/nachhaltig-leben/mein-fussabdruck-mobilitaet',
  year: 2021, // 2022 ESU-services, 2020 Mobitool
  data_points:
  {
    plane:
    {
      name: 'Plane',
      value: 375,
    },
    fossil_car:
    {
      name: 'Car, gas or diesel',
      value: 222,
    },
    hybrid_car:
    {
      name: 'Car, hybrid',
      value: 171,
    },
    electric_car_ch:
    {
      name: 'Car, electric, CH electricity',
      value: 89,
    },
    electric_car_eco:
    {
      name: 'Car, electric, eco electricity',
      value: 75,
    },
    bus:
    {
      name: 'Bus',
      value: 62,
    },
    train_neighbor_countries_avg:
    {
      name: 'Train (avg. DE, FR, AT, IT)',
      value: 42,
    },
    public_transport_avg:
    {
      name: 'Public Transport avg. CH',
      value: 25,
    },
    e_bike:
    {
      name: 'E-bike',
      value: 14,
    },
    bike:
    {
      name: 'Bicycle',
      value: 8,
    },
    train_ch:
    {
      name: 'Train, CH',
      value: 7,
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

interface ExtendedUsageDataSource extends DataSource {
  data_points: {
    smartphone: DataPoint;
    clothing: DataPoint;
    furniture: DataPoint;
  }
}

export const extended_usage: ExtendedUsageDataSource = {
  name: 'Extended Usage',
  unit: 'kg CO2-eq',
  source: 'https://www.greenpeace.ch/static/planet4-switzerland-stateless/2022/03/20967b15-infras_zusammenfassung-laengere-nutzungsdauer_de_20220322.pdf',
  year: 2022,
  data_points:
  {
    smartphone:
    {
      name: 'Use Smartphone 5.3 instead of 2.3 Years',
      value: 91000000 / population.data_points.at2022.value,
    },
    clothing:
    {
      name: 'Use Clothing 7 instead of 4 Years',
      value: 1486000000 / population.data_points.at2022.value,
    },
    furniture:
    {
      name: 'Use Furniture 13.5 instead of 10.5 Years',
      value: 143000000 / population.data_points.at2022.value,
    },
  },
};

interface RecycleDataSource extends DataSource {
  data_points: {
    recycle: DataPoint;
  }
}

export const recycle: RecycleDataSource = {
  name: 'Recycle',
  unit: 'kg CO2-eq',
  source: 'https://swissrecycle.ch/de/wertstoffe-wissen/leistungsbericht-2023/kennzahlen',
  year: 2022,
  data_points:
  {
    recycle:
    {
      name: 'Recycle',
      value: 507000000 / population.data_points.at2022.value,
    },
  },
};

interface AverageHeatingDataSource extends DataSource {
  data_points: {
    oil: DataPoint;
    gas: DataPoint;
    others: DataPoint;
  }
}

export const average_heating: AverageHeatingDataSource = {
  name: 'Average Heating Emissions',
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

interface HeatingMethodsDataSource extends DataSource {
  data_points: {
    oil: DataPoint;
    gas: DataPoint;
    pellet: DataPoint;
    heat_pump: DataPoint;
    earth_heat: DataPoint;
  }
}

export const heating_methods: HeatingMethodsDataSource = {
  name: 'Heating Methods',
  unit: 'kg CO2-eq',
  source: 'https://www.houzy.ch/post/co2-emissionen-von-heizungen',
  year: 2015,
  data_points:
  {
    oil:
    {
      name: 'Oil',
      value: 4680,
    },
    gas:
    {
      name: 'Gas',
      value: 3650,
    },
    pellet:
    {
      name: 'Pellet',
      value: 710,
    },
    heat_pump:
    {
      name: 'Heat Pump',
      value: 490,
    },
    earth_heat:
    {
      name: 'Earth Heat',
      value: 380,
    },
  },
};

interface ShowerSavingsDataSource extends DataSource {
  data_points: {
    economy_shower: DataPoint; // = Sparbrause.
  }
}

export const shower_savings: ShowerSavingsDataSource = {
  name: 'Shower Savings',
  unit: 'kg CO2-eq',
  source: 'https://duschbrause-co2.ch/fileadmin/ihs_bilder_grafiken/infografik_einsparungen_haushalt.jpg',
  year: 2023,
  data_points:
  {
    economy_shower:
    {
      name: 'Economy Shower',
      value: 400.0 / 3.0,
    },
  },
};

interface PowerProductionEfficiencyDataSource extends DataSource {
  data_points: {
    average: DataPoint;
    solar: DataPoint;
  }
}

export const power_production_efficiency: PowerProductionEfficiencyDataSource = {
  name: 'Power Production Efficiency',
  unit: 'kg CO2-eq / kWh',
  source: 'https://www.swissolar.ch/01_wissen/swissolar-publikationen/branchen-faktenblatt_pv_ch_d.pdf',
  year: 2020,
  data_points:
  {
    average:
    {
      name: 'Average',
      value: 0.128,
    },
    solar:
    {
      name: 'Solar',
      value: 0.042,
    },
  },
};

interface PowerProductionYieldDataSource extends DataSource {
  data_points: {
    solar: DataPoint;
  }
}

export const power_production_yield: PowerProductionYieldDataSource = {
  name: 'Power Production Yield',
  unit: 'kWh / kWp',
  source: 'https://www.solarenergie.de/photovoltaikanlage/finanzielles/lohnt-sich-photovoltaik/photovoltaik-im-winter',
  year: 2020,
  data_points:
  {
    solar:
    {
      name: 'Solar',
      value: 900,
    },
  },
};

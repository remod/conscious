import { Component, ViewChild } from '@angular/core';
import { ApexOptions, ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { Category, categoryColor } from '../Category';
import {
  extended_usage,
  footprint,
  footprint_sum,
  ground_transport_fractions,
  heating_methods,
  household_size,
  mobility_fractions,
  power_production_efficiency,
  power_production_yield,
  recycle,
  shower_savings,
  transport_efficiency
} from '../../data/Data';
import {
  diet_fractions,
  food_waste_fractions,
  nutrition_fractions,
  seasonal_regional
} from '../../data/Nutrition';

export type Data = {
  name: string;
  co2_eq: number;
  category: Category;
};

const flightsSum: number = footprint.data_points.mobility.value * mobility_fractions.data_points.airplane.value;
const nonFlightsSum: number = footprint.data_points.mobility.value * mobility_fractions.data_points.ground.value;
// Assumption: The sum of car emissions is mostly due to fossil fuel cars.
// 17.7% of the _new_ cars in Switzerland in 2022 were electric.
// That means that the overall fleet is still mostly fossil fuel cars.
const fossilCarSum: number = nonFlightsSum * ground_transport_fractions.data_points.car.value;
// Assumption: While we know that the traveled distance in cars is 10'400 km per year, we don't use that number as it is canceling out.
// We're only interested in the relative savings.
const traveledDistance: number = fossilCarSum / transport_efficiency.data_points.fossil_car.value;
// Assumption: When replacing a fossil fuel car with a public transport, the public transport is used for the same distance.
const publicTransportSum: number = traveledDistance * transport_efficiency.data_points.public_transport_avg.value;
const electricCarSum: number = traveledDistance * 0.5 * (
  transport_efficiency.data_points.electric_car_ch.value +
  transport_efficiency.data_points.electric_car_eco.value
);
const fossilHeating: number = 0.5 * (
  heating_methods.data_points.oil.value +
  heating_methods.data_points.gas.value
);
const renewableHeating: number = (
  heating_methods.data_points.pellet.value +
  heating_methods.data_points.heat_pump.value +
  heating_methods.data_points.earth_heat.value
) / 3;

const data: Data[] = [
  {
    name: 'Avoid Flights',
    co2_eq: flightsSum,
    category: Category.Mobility,
  },
  {
    name: 'Use Public Transport instead of Fossil Fuel Car',
    co2_eq: fossilCarSum - publicTransportSum,
    category: Category.Mobility,
  },
  {
    name: 'Use Electric instead of Fossil Fuel Car',
    co2_eq: fossilCarSum - electricCarSum,
    category: Category.Mobility,
  },
  {
    name: 'Use Clothing 7 instead of 4 Years',
    co2_eq: extended_usage.data_points.clothing.value,
    category: Category.Consumption,
  },
  {
    name: 'Recycle',
    co2_eq: recycle.data_points.recycle.value,
    category: Category.Consumption,
  },
  {
    name: 'Use Furniture 13.5 instead of 10.5 Years',
    co2_eq: extended_usage.data_points.furniture.value,
    category: Category.Consumption,
  },
  {
    name: 'Use Smartphone 5.3 instead of 2.3 Years',
    co2_eq: extended_usage.data_points.smartphone.value,
    category: Category.Consumption,
  },
  {
    name: 'Replace Fossil Fuel Heating with Renewable Heating',
    co2_eq:
      (fossilHeating - renewableHeating) /
      household_size.data_points.at2022.value,
    category: Category.Housing,
  },
  {
    name: 'Install 10 kWp Solar Panels',
    co2_eq: (power_production_efficiency.data_points.average.value - power_production_efficiency.data_points.solar.value) *
      power_production_yield.data_points.solar.value * 10,
    category: Category.Housing,
  },
  {
    name: 'Use economy shower head',
    co2_eq: shower_savings.data_points.economy_shower.value,
    category: Category.Housing,
  },
  {
    name: 'Become Vegan',
    // Assumption: Diet fractions apply in the same way to consumed food and wasted food.
    co2_eq: (diet_fractions.data_points.standard.value - diet_fractions.data_points.vegan.value) *
      footprint.data_points.nutrition.value,
    category: Category.Nutrition,
  },
  {
    name: 'Become Vegetarian',
    // Assumption: Diet fractions apply in the same way to consumed food and wasted food.
    co2_eq: (diet_fractions.data_points.standard.value - diet_fractions.data_points.vegetarian.value) *
      footprint.data_points.nutrition.value,
    category: Category.Nutrition,
  },
  {
    name: 'Avoid Food Waste',
    // Assumption: You have an average diet including meat and fish.
    co2_eq: footprint.data_points.nutrition.value * food_waste_fractions.data_points.wasted_food.value,
    category: Category.Nutrition,
  },
  {
    name: 'Become Flexitarian',
    // Assumption: Diet fractions apply in the same way to consumed food and wasted food.
    co2_eq: (diet_fractions.data_points.standard.value - diet_fractions.data_points.flexitarian.value) *
      footprint.data_points.nutrition.value,
    category: Category.Nutrition,
  },
  {
    name: 'Buy seasonal and regional vegetables and fruits',
    // Assumption: You have an average diet including meat and fish.
    co2_eq: footprint.data_points.nutrition.value * ((1.0 - seasonal_regional.data_points.seasonal_regional.value) * nutrition_fractions.data_points.vegetables_fruits.value),
    category: Category.Nutrition,
  }
];

@Component({
  imports: [NgApexchartsModule],
  selector: 'savings-chart',
  standalone: true,
  templateUrl: './savings-chart.component.html',
  styleUrls: ['./savings-chart.component.css'],
})
export class SavingsChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: ApexOptions;

  constructor() {
    for (const item of data) {
      console.log(item.name, item.category, "boxes: ", ((item.co2_eq / footprint_sum) * 100 / 0.25).toFixed(1));
    }
    this.chartOptions = {
      series: [
        {
          name: 'basic',
          data: data.map((d) => (d.co2_eq / footprint_sum) * 100),
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      colors: data.map((d) => categoryColor[d.category]),
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: data.map((d) => d.name),
      },
      legend: {
        show: false,
      },
    };
  }
}

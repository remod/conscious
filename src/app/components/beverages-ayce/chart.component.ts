import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { NutritionCategory, nutritionCategoryColor } from '../NutritionCategory';
import { nutrition_ayce } from '../../data/NutritionAyce';

const data: { name: string; co2_eq: number; category: NutritionCategory }[] = [
  {
    name: nutrition_ayce.data_points.water.name,
    co2_eq: nutrition_ayce.data_points.water.value,
    category: NutritionCategory.Beverage,
  },
  {
    name: nutrition_ayce.data_points.peas.name,
    co2_eq: nutrition_ayce.data_points.peas.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.potatoes.name,
    co2_eq: nutrition_ayce.data_points.potatoes.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.margarine.name,
    co2_eq: nutrition_ayce.data_points.margarine.value,
    category: NutritionCategory.FatAndOil,
  },
  {
    name: nutrition_ayce.data_points.pumpkin.name,
    co2_eq: nutrition_ayce.data_points.pumpkin.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.spinach.name,
    co2_eq: nutrition_ayce.data_points.spinach.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.lentils.name,
    co2_eq: nutrition_ayce.data_points.lentils.value,
    category: NutritionCategory.Proteins
  },
  {
    name: nutrition_ayce.data_points.nuts.name,
    co2_eq: nutrition_ayce.data_points.nuts.value,
    category: NutritionCategory.FatAndOil,
  },
  {
    name: nutrition_ayce.data_points.pasta.name,
    co2_eq: nutrition_ayce.data_points.pasta.value,
    category: NutritionCategory.Carbohydrates,
  },
  {
    name: nutrition_ayce.data_points.black_tea.name,
    co2_eq: nutrition_ayce.data_points.black_tea.value,
    category: NutritionCategory.Beverage,
  },
  {
    name: nutrition_ayce.data_points.carrots.name,
    co2_eq: nutrition_ayce.data_points.carrots.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.pea_based_meat_substitute.name,
    co2_eq: nutrition_ayce.data_points.pea_based_meat_substitute.value,
    category: NutritionCategory.Proteins,
  },
  {
    name: nutrition_ayce.data_points.apples.name,
    co2_eq: nutrition_ayce.data_points.apples.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.bread.name,
    co2_eq: nutrition_ayce.data_points.bread.value,
    category: NutritionCategory.Carbohydrates,
  },
  {
    name: nutrition_ayce.data_points.oat_milk.name,
    co2_eq: nutrition_ayce.data_points.oat_milk.value,
    category: NutritionCategory.Beverage,
  },
  {
    name: nutrition_ayce.data_points.mackerel.name,
    co2_eq: nutrition_ayce.data_points.mackerel.value,
    category: NutritionCategory.Proteins,
  },
  {
    name: nutrition_ayce.data_points.bananas.name,
    co2_eq: nutrition_ayce.data_points.bananas.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.strawberries.name,
    co2_eq: nutrition_ayce.data_points.strawberries.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.dark_chocolate.name,
    co2_eq: nutrition_ayce.data_points.dark_chocolate.value,
    category: NutritionCategory.FatAndOil,
  },
  {
    name: nutrition_ayce.data_points.avocado.name,
    co2_eq: nutrition_ayce.data_points.avocado.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.cucumbers.name,
    co2_eq: nutrition_ayce.data_points.cucumbers.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.tomatoes.name,
    co2_eq: nutrition_ayce.data_points.tomatoes.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.porcini_mushrooms.name,
    co2_eq: nutrition_ayce.data_points.porcini_mushrooms.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.apple_juice.name,
    co2_eq: nutrition_ayce.data_points.apple_juice.value,
    category: NutritionCategory.Beverage,
  },
  {
    name: nutrition_ayce.data_points.oranges.name,
    co2_eq: nutrition_ayce.data_points.oranges.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.tofu.name,
    co2_eq: nutrition_ayce.data_points.tofu.value,
    category: NutritionCategory.Proteins,
  },
  {
    name: nutrition_ayce.data_points.milk_chocolate.name,
    co2_eq: nutrition_ayce.data_points.milk_chocolate.value,
    category: NutritionCategory.FatAndOil,
  },
  {
    name: nutrition_ayce.data_points.beer.name,
    co2_eq: nutrition_ayce.data_points.beer.value,
    category: NutritionCategory.Beverage,
  },
  {
    name: nutrition_ayce.data_points.coffee.name,
    co2_eq: nutrition_ayce.data_points.coffee.value,
    category: NutritionCategory.Beverage,
  },
  {
    name: nutrition_ayce.data_points.chicken.name,
    co2_eq: nutrition_ayce.data_points.chicken.value,
    category: NutritionCategory.Proteins,
  },
  {
    name: nutrition_ayce.data_points.eggs.name,
    co2_eq: nutrition_ayce.data_points.eggs.value,
    category: NutritionCategory.Proteins,
  },
  {
    name: nutrition_ayce.data_points.rice.name,
    co2_eq: nutrition_ayce.data_points.rice.value,
    category: NutritionCategory.Carbohydrates,
  },
  {
    name: nutrition_ayce.data_points.aubergine_season_local.name,
    co2_eq: nutrition_ayce.data_points.aubergine_season_local.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.tuna.name,
    co2_eq: nutrition_ayce.data_points.tuna.value,
    category: NutritionCategory.Proteins,
  },
  {
    name: nutrition_ayce.data_points.cheese.name,
    co2_eq: nutrition_ayce.data_points.cheese.value,
    category: NutritionCategory.FatAndOil,
  },
  {
    name: nutrition_ayce.data_points.dates.name,
    co2_eq: nutrition_ayce.data_points.dates.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.green_asparagus.name,
    co2_eq: nutrition_ayce.data_points.green_asparagus.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.butter.name,
    co2_eq: nutrition_ayce.data_points.butter.value,
    category: NutritionCategory.FatAndOil,
  },
  {
    name: nutrition_ayce.data_points.milk.name,
    co2_eq: nutrition_ayce.data_points.milk.value,
    category: NutritionCategory.Beverage,
  },
  {
    name: nutrition_ayce.data_points.pork.name,
    co2_eq: nutrition_ayce.data_points.pork.value,
    category: NutritionCategory.Proteins,
  },
  {
    name: nutrition_ayce.data_points.aubergine_offseason_spain.name,
    co2_eq: nutrition_ayce.data_points.aubergine_offseason_spain.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.french_fries.name,
    co2_eq: nutrition_ayce.data_points.french_fries.value,
    category: NutritionCategory.Carbohydrates,
  },
  {
    name: nutrition_ayce.data_points.salmon.name,
    co2_eq: nutrition_ayce.data_points.salmon.value,
    category: NutritionCategory.Proteins,
  },
  {
    name: nutrition_ayce.data_points.natural_yogurt.name,
    co2_eq: nutrition_ayce.data_points.natural_yogurt.value,
    category: NutritionCategory.Proteins,
  },
  {
    name: nutrition_ayce.data_points.orange_juice.name,
    co2_eq: nutrition_ayce.data_points.orange_juice.value,
    category: NutritionCategory.Beverage,
  },
  {
    name: nutrition_ayce.data_points.mushrooms.name,
    co2_eq: nutrition_ayce.data_points.mushrooms.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.wine.name,
    co2_eq: nutrition_ayce.data_points.wine.value,
    category: NutritionCategory.Beverage,
  },
  {
    name: nutrition_ayce.data_points.aubergine_offseason_local.name,
    co2_eq: nutrition_ayce.data_points.aubergine_offseason_local.value,
    category: NutritionCategory.VegetableAndFruit,
  },
  {
    name: nutrition_ayce.data_points.beef.name,
    co2_eq: nutrition_ayce.data_points.beef.value,
    category: NutritionCategory.Proteins,
  },
  {
    name: nutrition_ayce.data_points.veal.name,
    co2_eq: nutrition_ayce.data_points.veal.value,
    category: NutritionCategory.Proteins,
  },
  {
    name: nutrition_ayce.data_points.aubergine_offseason_thailand.name,
    co2_eq: nutrition_ayce.data_points.aubergine_offseason_thailand.value,
    category: NutritionCategory.VegetableAndFruit,
  },
];

type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: string[];
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};

@Component({
  imports: [NgApexchartsModule],
  selector: 'beverages-ayce-chart',
  standalone: true,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class BeveragesAyceChartComponent {
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'basic',
          // Average emission.
          data: data.map(
            (d) => d.co2_eq
          ),
        },
      ],
      chart: {
        type: 'bar',
        height: 1000,
      },
      colors: data.map((d) => nutritionCategoryColor[d.category]),
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
    };
  }
}

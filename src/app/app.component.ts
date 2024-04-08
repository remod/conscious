import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeveragesChartComponent } from './components/beverages/chart.component';
import { FoodTransportChartComponent } from './components/food-transport/chart.component';
import { FootprintChartComponent } from './components/footprint/footprint-chart.component';
import { GoodsChartComponent } from './components/goods/chart.component';
import { HeatingChartComponent } from './components/heating/chart.component';
import { NutritionAltChartComponent } from './components/nutrition-alt/nutrition-chart.component';
import { NutritionChartComponent } from './components/nutrition/nutrition-chart.component';
import { SavingsChartComponent } from './components/savings/savings-chart.component';
import { TransportationAltChartComponent } from './components/transportation-alt/transportation-chart.component';
import { TransportationChartComponent } from './components/transportation/transportation-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BeveragesChartComponent,
    FoodTransportChartComponent,
    FootprintChartComponent,
    GoodsChartComponent,
    HeatingChartComponent,
    NutritionAltChartComponent,
    NutritionChartComponent,
    RouterOutlet,
    SavingsChartComponent,
    TransportationAltChartComponent,
    TransportationChartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'conscious';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FootprintChartComponent } from './components/footprint/footprint-chart.component';
import { NutritionChartComponent } from './components/nutrition/nutrition-chart.component';
import { NutritionAltChartComponent } from './components/nutrition_alt/nutrition-chart.component';
import { TransportationChartComponent } from './components/transportation/transportation-chart.component';
import { TransportationAltChartComponent } from './components/transportation-alt/transportation-chart.component';
import { SavingsChartComponent } from './components/savings/savings-chart.component';
import { BeveragesChartComponent } from './components/beverages/chart.component';
import { FoodTransportChartComponent } from './components/food-transport/chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    BeveragesChartComponent,
    FoodTransportChartComponent,
    FootprintChartComponent,
    NutritionChartComponent,
    NutritionAltChartComponent,
    RouterOutlet,
    SavingsChartComponent,
    TransportationChartComponent,
    TransportationAltChartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'conscious';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FootprintChartComponent } from './components/footprint/footprint-chart.component';
import { NutritionChartComponent } from './components/nutrition/nutrition-chart.component';
import { NutritionAltChartComponent } from './components/nutrition_alt/nutrition-chart.component';
import { TransportationChartComponent } from './components/transportation/transportation-chart.component';
import { TransportationAltChartComponent } from './components/transportation-alt/transportation-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FootprintChartComponent,
    NutritionChartComponent,
    NutritionAltChartComponent,
    TransportationChartComponent,
    TransportationAltChartComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'conscious';
}

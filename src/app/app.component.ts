import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FootprintChartComponent } from './components/footprint/footprint-chart.component';
import { TransportationChartComponent } from './components/transportation/transportation-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FootprintChartComponent, TransportationChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'conscious';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransportationChartComponent } from './components/transportation/transportation-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TransportationChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'conscious';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LineChartComponent } from './components/line-chart/line-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LineChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'conscious';
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationChartComponent } from './transportation-chart.component';

describe('LineChartComponent', () => {
  let component: TransportationChartComponent;
  let fixture: ComponentFixture<TransportationChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportationChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TransportationChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTransportChartComponent } from './food-transport-chart.component';

describe('FoodTransportChartComponent', () => {
  let component: FoodTransportChartComponent;
  let fixture: ComponentFixture<FoodTransportChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodTransportChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoodTransportChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

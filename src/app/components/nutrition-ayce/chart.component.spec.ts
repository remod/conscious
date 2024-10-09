import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionAyceChartComponent } from './nutrition-ayce-chart.component';

describe('NutritionChartComponent', () => {
  let component: NutritionAyceChartComponent;
  let fixture: ComponentFixture<NutritionAyceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionAyceChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NutritionAyceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

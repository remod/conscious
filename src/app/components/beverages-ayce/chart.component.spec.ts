import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesAyceChartComponent } from './beverages-ayce-chart.component';

describe('BeveragesChartComponent', () => {
  let component: BeveragesAyceChartComponent;
  let fixture: ComponentFixture<BeveragesAyceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeveragesAyceChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BeveragesAyceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

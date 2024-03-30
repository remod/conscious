import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragesChartComponent } from './beverages-chart.component';

describe('BeveragesChartComponent', () => {
  let component: BeveragesChartComponent;
  let fixture: ComponentFixture<BeveragesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeveragesChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BeveragesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

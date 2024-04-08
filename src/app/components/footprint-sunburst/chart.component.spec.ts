import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootprintSunburstChartComponent } from './chart.component';

describe('FootprintSunburstChartComponent', () => {
  let component: FootprintSunburstChartComponent;
  let fixture: ComponentFixture<FootprintSunburstChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootprintSunburstChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FootprintSunburstChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatingChartComponent } from './chart.component';

describe('HeatingChartComponent', () => {
  let component: HeatingChartComponent;
  let fixture: ComponentFixture<HeatingChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeatingChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeatingChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsChartComponent } from './savings-chart.component';

describe('SavingsChartComponent', () => {
  let component: SavingsChartComponent;
  let fixture: ComponentFixture<SavingsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingsChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SavingsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsChartComponent } from './goods-chart.component';

describe('GoodsChartComponent', () => {
  let component: GoodsChartComponent;
  let fixture: ComponentFixture<GoodsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsChartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

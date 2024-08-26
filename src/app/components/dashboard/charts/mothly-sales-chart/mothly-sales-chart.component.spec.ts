import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MothlySalesChartComponent } from './mothly-sales-chart.component';

describe('MothlySalesChartComponent', () => {
  let component: MothlySalesChartComponent;
  let fixture: ComponentFixture<MothlySalesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MothlySalesChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MothlySalesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTargetChartComponent } from './sales-target-chart.component';

describe('SalesTargetChartComponent', () => {
  let component: SalesTargetChartComponent;
  let fixture: ComponentFixture<SalesTargetChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesTargetChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesTargetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

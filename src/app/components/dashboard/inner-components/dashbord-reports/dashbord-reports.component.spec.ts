import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordReportsComponent } from './dashbord-reports.component';

describe('DashbordReportsComponent', () => {
  let component: DashbordReportsComponent;
  let fixture: ComponentFixture<DashbordReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

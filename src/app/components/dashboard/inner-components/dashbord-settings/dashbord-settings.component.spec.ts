import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbordSettingsComponent } from './dashbord-settings.component';

describe('DashbordSettingsComponent', () => {
  let component: DashbordSettingsComponent;
  let fixture: ComponentFixture<DashbordSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbordSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashbordSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

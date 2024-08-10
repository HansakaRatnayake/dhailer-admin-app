import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerActivestatusComponent } from './customer-activestatus.component';

describe('CustomerActivestatusComponent', () => {
  let component: CustomerActivestatusComponent;
  let fixture: ComponentFixture<CustomerActivestatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerActivestatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerActivestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

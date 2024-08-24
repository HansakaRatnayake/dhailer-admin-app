import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidePannelBarComponent } from './side-pannel-bar.component';

describe('SidePannelBarComponent', () => {
  let component: SidePannelBarComponent;
  let fixture: ComponentFixture<SidePannelBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePannelBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidePannelBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

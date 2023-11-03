import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTrackSpendingMainComponent } from './driver-track-spending-main.component';

describe('DriverTrackSpendingMainComponent', () => {
  let component: DriverTrackSpendingMainComponent;
  let fixture: ComponentFixture<DriverTrackSpendingMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTrackSpendingMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverTrackSpendingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

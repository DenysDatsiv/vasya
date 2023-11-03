import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTrackSpendingAdditingComponent } from './driver-track-spending-additing.component';

describe('DriverTrackSpendingAdditingComponent', () => {
  let component: DriverTrackSpendingAdditingComponent;
  let fixture: ComponentFixture<DriverTrackSpendingAdditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTrackSpendingAdditingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverTrackSpendingAdditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

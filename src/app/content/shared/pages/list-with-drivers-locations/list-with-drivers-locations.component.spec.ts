import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithDriversLocationsComponent } from './list-with-drivers-locations.component';

describe('ListWithDriversLocationsComponent', () => {
  let component: ListWithDriversLocationsComponent;
  let fixture: ComponentFixture<ListWithDriversLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWithDriversLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWithDriversLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

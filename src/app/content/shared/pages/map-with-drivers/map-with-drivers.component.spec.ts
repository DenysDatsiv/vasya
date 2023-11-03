import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapWithDriversComponent } from './map-with-drivers.component';

describe('MapWithDriversComponent', () => {
  let component: MapWithDriversComponent;
  let fixture: ComponentFixture<MapWithDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapWithDriversComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapWithDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

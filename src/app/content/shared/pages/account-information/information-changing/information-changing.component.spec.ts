import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationChangingComponent } from './information-changing.component';

describe('InformationChangingComponent', () => {
  let component: InformationChangingComponent;
  let fixture: ComponentFixture<InformationChangingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationChangingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationChangingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

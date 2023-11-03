import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAboutOrderComponent } from './information-about-order.component';

describe('InformationAboutOrderComponent', () => {
  let component: InformationAboutOrderComponent;
  let fixture: ComponentFixture<InformationAboutOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationAboutOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationAboutOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

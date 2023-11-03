import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoversationWithUserComponent } from './coversation-with-user.component';

describe('CoversationWithUserComponent', () => {
  let component: CoversationWithUserComponent;
  let fixture: ComponentFixture<CoversationWithUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoversationWithUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoversationWithUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

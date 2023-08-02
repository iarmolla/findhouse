import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRegisterAccommodationComponent } from './property-register-accommodation.component';

describe('PropertyRegisterAccommodationComponent', () => {
  let component: PropertyRegisterAccommodationComponent;
  let fixture: ComponentFixture<PropertyRegisterAccommodationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyRegisterAccommodationComponent]
    });
    fixture = TestBed.createComponent(PropertyRegisterAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

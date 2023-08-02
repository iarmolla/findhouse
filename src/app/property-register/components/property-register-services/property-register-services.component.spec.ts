import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRegisterServicesComponent } from './property-register-services.component';

describe('PropertyRegisterServicesComponent', () => {
  let component: PropertyRegisterServicesComponent;
  let fixture: ComponentFixture<PropertyRegisterServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyRegisterServicesComponent]
    });
    fixture = TestBed.createComponent(PropertyRegisterServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

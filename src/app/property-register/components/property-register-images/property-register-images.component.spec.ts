import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyRegisterImagesComponent } from './property-register-images.component';

describe('PropertyRegisterImagesComponent', () => {
  let component: PropertyRegisterImagesComponent;
  let fixture: ComponentFixture<PropertyRegisterImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropertyRegisterImagesComponent]
    });
    fixture = TestBed.createComponent(PropertyRegisterImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

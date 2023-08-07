import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyRegisterComponent } from './property-register/property-register.component';
import { PropertyRegisterAccommodationComponent } from './property-register/components/property-register-accommodation/property-register-accommodation.component';
import { PropertyRegisterImagesComponent } from './property-register/components/property-register-images/property-register-images.component';
import { PropertyRegisterServicesComponent } from './property-register/components/property-register-services/property-register-services.component';
import { MapComponent } from './property-register/components/map/map.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './home/components/card/card.component';
import { PropertyDetailComponent } from './home/components/property-detail/property-detail.component';
import { ContactComponent } from './home/components/contact/contact.component';
import { ImageUrl } from './pipes/image-url.pipe';
import { ProfileComponent } from './home/components/profile/profile.component';
import { NavbarComponent } from './home/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyRegisterComponent,
    PropertyRegisterAccommodationComponent,
    PropertyRegisterImagesComponent,
    PropertyRegisterServicesComponent,
    MapComponent,
    HomeComponent,
    CardComponent,
    PropertyDetailComponent,
    ContactComponent,
    ImageUrl,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

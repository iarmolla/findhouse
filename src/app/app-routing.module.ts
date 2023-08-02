import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyRegisterComponent } from './property-register/property-register.component';
import { AuthGuard } from './guards/auth.guard';
import { PropertyRegisterGuard } from './guards/property-register.guard';
import { HomeComponent } from './home/home.component';
import { PropertyDetailComponent } from './home/components/property-detail/property-detail.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'property-register', component: PropertyRegisterComponent, canActivate: [PropertyRegisterGuard]
  },
  {
    path: '', component: HomeComponent
    // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'property-detail', component: PropertyDetailComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

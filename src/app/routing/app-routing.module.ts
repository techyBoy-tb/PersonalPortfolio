import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../components/landing/landing.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';

export const routes: Routes = [
  {
    path: 'error', component: ErrorPageComponent
  },
  {
    path: '', redirectTo: '/landing', pathMatch: 'full'
  },
  {
    path: 'home', component: LandingComponent
  },
  {
    path: 'social', component: ErrorPageComponent
  },
  {
    path: 'contact-me', component: ContactMeComponent
  },
  {
    path: '**', component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

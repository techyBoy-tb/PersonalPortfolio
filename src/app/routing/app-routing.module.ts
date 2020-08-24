import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';
import { SocialComponent } from '../components/social/social.component';

export const routes: Routes = [
  {
    path: 'error', component: ErrorPageComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'social', component: SocialComponent
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

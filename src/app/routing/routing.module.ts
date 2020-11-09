import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { CarouselComponent } from '../components/carousel/carousel.component';
import { ErrorPageComponent } from '../components/common/error-page/error-page.component';
import { ContactMeComponent } from '../components/contact-me/contact-me.component';
import { HomeComponent } from '../components/home/home.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { SocialComponent } from '../components/social/social.component';

export const routes: Routes = [
  {
    path: 'error', component: ErrorPageComponent,
    data: { animation: 'error' }
  },
  {
    path: '', redirectTo: '/home', pathMatch: 'full',
    data: { animation: 'home' }
  },
  {
    path: 'home', component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'social', component: SocialComponent,
    data: { animation: 'social' }
  },
  {
    path: 'contact-me', component: ContactMeComponent,
    data: { animation: 'contact' }
  },
  {
    path: 'about', component: AboutComponent,
    data: { animation: 'about' }
  },
  {
    path: 'carousel', component: CarouselComponent,
    data: { animation: 'carousel' }
  },
  {
    path: 'projects', component: ProjectsComponent,
    data: { animation: 'projects' }
  },
  {
    path: '**', component: ErrorPageComponent,
    data: { animation: 'error' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';

import { CustomAngularMaterialModule } from './shared/angular-material.module';
import { HomeComponent } from './components/home/home.component';
import { ErrorPageComponent } from './components/common/error-page/error-page.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { SocialComponent } from './components/social/social.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/common/layout/footer/footer.component';
import { HeaderComponent } from './components/common/layout/header/header.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LeavingDialogComponent } from './components/common/dialog/leaving-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorPageComponent,
    ContactMeComponent,
    SocialComponent,
    LeavingDialogComponent,
    AboutComponent,
    ProjectsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CustomAngularMaterialModule,
    MatCarouselModule.forRoot()

  ],
  entryComponents: [
    LeavingDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

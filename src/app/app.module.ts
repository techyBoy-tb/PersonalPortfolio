import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LeavingDialogComponent } from './components/common/dialog/leaving-dialog.component';
import { ErrorPageComponent } from './components/common/error-page/error-page.component';
import { InputComponent } from './components/common/input/input.component';
import { FooterComponent } from './components/common/layout/footer/footer.component';
import { HeaderComponent } from './components/common/layout/header/header.component';
import { StatusDialogComponent } from './components/common/status-dialog/status-dialog.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SocialComponent } from './components/social/social.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { CustomAngularMaterialModule } from './shared/angular-material.module';

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
    CarouselComponent,
    InputComponent,
    StatusDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    CustomAngularMaterialModule,
    MatCarouselModule.forRoot()

  ],
  entryComponents: [
    LeavingDialogComponent,
    StatusDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

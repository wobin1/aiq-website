import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsHereComponent } from './contact-us-here/contact-us-here.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RedirectHydraComponent } from './redirect-hydra/redirect-hydra.component';


@NgModule({
  declarations: [
    AppComponent,
 
    WhoWeAreComponent,
    WhatWeDoComponent,
    ContactUsComponent,
    ContactUsHereComponent,
    NavigationComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    RedirectHydraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
export class AppModule { }

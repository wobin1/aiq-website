import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsHereComponent } from './contact-us-here/contact-us-here.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoWeAreComponent,
    WhatWeDoComponent,
    ContactUsComponent,
    ContactUsHereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsHereComponent } from './contact-us-here/contact-us-here.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: WhoWeAreComponent
  },
  {
    path: 'capabilities',
    component: WhatWeDoComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'contact-us-here',
    component: ContactUsHereComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

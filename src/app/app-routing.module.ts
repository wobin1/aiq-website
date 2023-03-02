import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsHereComponent } from './contact-us-here/contact-us-here.component';

const routes: Routes = [
  {
    path: '',
    component: WhoWeAreComponent
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

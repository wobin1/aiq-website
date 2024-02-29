import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactUsHereComponent } from './contact-us-here/contact-us-here.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RedirectHydraComponent } from './redirect-hydra/redirect-hydra.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about-us',
    component: WhoWeAreComponent,
  },
  {
    path: 'capabilities',
    component: WhatWeDoComponent,
  },
  {
    path: 'join-us',
    component: ContactUsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsHereComponent,
  },
  {
    path: 'hydra',
    component: RedirectHydraComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, scrollPositionRestoration: 'top' })], 
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CompanyComponent } from './components/company/company.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component:HomeComponent},
    {path:'products', component:ProductsComponent},
    {path:'company', component:CompanyComponent},
    {path:'careers', component:CareersComponent},
    {path:'contact-us', component:ContactUsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
    exports: [RouterModule]
})

export class AppRoutingModule {}

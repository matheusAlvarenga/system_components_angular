import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyComponent } from './biography/biography.component';
import { ColectionsHomeComponent } from './colections-home/colections-home.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {path: '', component: ColectionsHomeComponent, children: [
    {path: '', component: BiographyComponent},
    {path: 'partners', component: PartnersComponent},
    {path: 'companies', component: CompaniesComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColectionsRoutingModule { }

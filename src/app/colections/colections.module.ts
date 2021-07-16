import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColectionsRoutingModule } from './colections-routing.module';
import { ColectionsHomeComponent } from './colections-home/colections-home.component';
import { TableComponent } from './table/table.component';
import { SharedModule } from '../shared/shared.module';
import { BiographyComponent } from './biography/biography.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    ColectionsHomeComponent,
    TableComponent,
    BiographyComponent,
    CompaniesComponent,
    PartnersComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    ColectionsRoutingModule,
    SharedModule
  ],
  exports: [
    ColectionsHomeComponent
  ]
})
export class ColectionsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: 'elements', loadChildren: () => import('./elements/elements.module').then((m) => m.ElementsModule)},
  {path: 'collections', loadChildren: () => import('./colections/colections.module').then((m) => m.ColectionsModule)},
  {path: 'modules', loadChildren: () => import('./mods/mods.module').then((m) => m.ModsModule)},
  {path: 'views', loadChildren: () => import('./views/views.module').then((m) => m.ViewsModule)},
  {path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

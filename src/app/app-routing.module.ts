import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
;import { TafutaComponent} from './tafuta/tafuta.component'
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {"path":"home","component":TafutaComponent},
  {"pathMatch":"full","redirectTo":"home","path":""},
  {"path":"**","component":NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

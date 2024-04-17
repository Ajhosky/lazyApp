import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mymodule2Component } from './mymodule2.component';

const routes: Routes = [{ path: '', component: Mymodule2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Mymodule2RoutingModule { }

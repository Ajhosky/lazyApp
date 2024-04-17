import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Mymodule2RoutingModule } from './mymodule2-routing.module';
import { Mymodule2Component } from './mymodule2.component';


@NgModule({
  declarations: [
    Mymodule2Component
  ],
  imports: [
    CommonModule,
    Mymodule2RoutingModule
  ]
})
export class Mymodule2Module { }

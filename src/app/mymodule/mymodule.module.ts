import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MymoduleRoutingModule } from './mymodule-routing.module';
import { MymoduleComponent } from './mymodule.component';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';

const routes: Routes = [
  { path: 'component1', component: Component1Component },
  { path: 'component2', component: Component2Component }
];

@NgModule({
  declarations: [
    MymoduleComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule,
    MymoduleRoutingModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MymoduleComponent,
    RouterModule
  ]
})
export class MymoduleModule { }

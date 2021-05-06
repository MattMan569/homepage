import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { AngularMaterialModule } from './../angular-material.module';

import { ExamplesComponent } from './examples.component';

@NgModule({
  declarations: [
    ExamplesComponent,
  ],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    AngularMaterialModule,
  ]
})
export class ExamplesModule { }

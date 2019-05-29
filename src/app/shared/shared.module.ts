import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorIntl } from '@angular/material';

import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl, TipoPipe } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	MascaraDirective,
  	TipoPipe
  ],
  exports: [
  	MascaraDirective,
  	TipoPipe
  ],
  providers: [
  	PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }

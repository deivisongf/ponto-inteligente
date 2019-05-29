import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorIntl } from '@angular/material';

import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl } from './';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	MascaraDirective
  ],
  exports: [
  	MascaraDirective
  ],
  providers: [
  	PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CadastrarPjComponent } from './components';

@NgModule({
  declarations: [CadastrarPjComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})

export class CadastroPjModule { }

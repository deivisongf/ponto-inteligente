import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { 
	CadastrarPfComponent, 
	CadastroPfComponent 
} from './components';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [
  	CadastrarPfComponent,
  	CadastroPfComponent
  ]
})
export class CadastroPfModule { }

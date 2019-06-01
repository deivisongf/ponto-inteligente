import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { 
  ListagemComponent, 
  AtualizacaoComponent, 
  CadastroComponent ,
  AdminComponent
} from './components';

@NgModule({
  declarations: [
    ListagemComponent,
    AtualizacaoComponent, 
    CadastroComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class AdminModule { }

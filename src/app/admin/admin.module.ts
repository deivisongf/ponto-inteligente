import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ListagemComponent, 
  AtualizacaoComponent, 
  CadastroComponent 
} from './components';

@NgModule({
  declarations: [
    ListagemComponent,
    AtualizacaoComponent, 
    CadastroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }

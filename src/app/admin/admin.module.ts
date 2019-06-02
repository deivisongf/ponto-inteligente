import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatDialogModule,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatSortModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '../shared/shared.module';

import { 
  HttpUtilService, 
  LancamentoService,
  PtBrMatPaginatorIntl 
} from '../shared';

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
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule
  ],
  providers:[
    LancamentoService,
    HttpUtilService,
    MatPaginatorIntl,
    { provide: MAT_DATE_LOCALE, useValue:'pt-BR' },
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl }
  ]
})
export class AdminModule { }

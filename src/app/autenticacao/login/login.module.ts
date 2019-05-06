import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent, LogarComponent } from './components';

@NgModule({
  declarations: [
    LoginComponent,
    LogarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule
  ]
})

export class LoginModule { }

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import {
  Tipo
} from '../../../shared';

import * as moment from 'moment';

declare var navigator: any;

@Component({
  selector: 'app-lancamento',
  templateUrl: './lancamento.component.html',
  styleUrls: ['./lancamento.component.css']
})
export class LancamentoComponent implements OnInit {

  private dataAtualEn: string;
  dataAtual: string;
  geoLocation: string;
  ultimoTipoLancado: string;

  constructor(
    private snackBar: MatSnackBar,
    private router : Router
  ) { }

  ngOnInit() {
      this.dataAtual = moment().format('DD/MM/YYYY HH:mm:ss');
      this.dataAtualEn = moment().format('YYYY-MM-DD HH:mm:ss');
      this.obterGeolocation();
      this.ultimoTipoLancado = '';
      this.obterUltimoLancamento();
  }

  obterGeolocation(): string {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => this.geoLocation = `${position.coords.latitude},${position.coords.longitude}`);
    }

    return '';
  }

  iniciarTrabalho(){
    this.cadastrar(Tipo.INICIO_TRABALHO);
  }

  terminarTrabalho(){
    this.cadastrar(Tipo.TERMINO_TRABALHO);
  }

  iniciarAlmoco(){
    this.cadastrar(Tipo.INICIO_ALMOCO);
  }

  terminarAlmoco(){
    this.cadastrar(Tipo.TERMINO_ALMOCO);
  }

  obterUltimoLancamento(){
    this.ultimoTipoLancado = '';
  }

  cadastrar(tipo: Tipo){
    alert();
  }

}

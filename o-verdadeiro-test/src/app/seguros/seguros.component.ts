import { Component, OnInit } from '@angular/core';
import { SegurosService } from '../services/seguros.service';
import { Seguro } from './seguro/seguro.model';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.css']
})
export class SegurosComponent implements OnInit {

  constructor(private listaSeguros: SegurosService) { }

  seguros: Seguro[];

  ngOnInit(): void {
    this.seguros = this.listaSeguros.seguros;
  }



}

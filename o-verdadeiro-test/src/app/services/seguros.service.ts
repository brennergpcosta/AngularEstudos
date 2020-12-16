import { Injectable } from '@angular/core';
import { Seguro } from '../seguros/seguro/seguro.model';

@Injectable({
  providedIn: 'root',
})
export class SegurosService {
  constructor() {}

  seguros: Seguro[] = [
    {
      tipo: 'Auto',
      descricao: 'Ande tranquilo sem ter que se preocupar com imprevistos na rua!',
    },
    {
      tipo: 'Residencia',
      descricao: 'Casa é um lugar para se descansar, não para se preocupar!'
    },
  ];
}

import { Component, OnInit, Input } from '@angular/core';
import { Seguro } from './seguro.model';

@Component({
  selector: 'app-seguro',
  templateUrl: './seguro.component.html',
  styleUrls: ['./seguro.component.css']
})
export class SeguroComponent implements OnInit {
  @Input() seguro: Seguro;

  constructor() { }
  tipo: string;
  descricao: string;

  ngOnInit(): void {
  }

}

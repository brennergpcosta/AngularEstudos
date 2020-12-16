import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangePageService {

  constructor() { }

  changePage = new EventEmitter<string>();
}

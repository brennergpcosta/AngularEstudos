import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangePageService {

  constructor() { }

  changePage = new Subject<string>();
}

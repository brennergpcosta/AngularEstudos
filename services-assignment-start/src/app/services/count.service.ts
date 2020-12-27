import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CountService {
  counterToActive: number = 0;
  counterToInactive: number = 0;

  countActive() {
    this.counterToActive++;
  }

  countInactive() {
    this.counterToInactive++;
  }

  constructor() {}
}

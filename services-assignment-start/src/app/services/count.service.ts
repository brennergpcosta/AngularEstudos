import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CountService {
  counterToActive: number = 0;
  counterToInactive: number = 0;

  countActive() {
    this.counterToActive++;
    console.log("Active: " + this.counterToActive);
  }

  countInactive() {
    this.counterToInactive++;
    console.log("Inactive: " + this.counterToInactive);
  }

  constructor() {}
}

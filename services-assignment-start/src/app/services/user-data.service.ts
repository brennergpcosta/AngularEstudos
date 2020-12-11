import { Injectable } from "@angular/core";
import { CountService } from "./count.service";

@Injectable({
  providedIn: "root",
})
export class UserDataService {
  constructor(private count: CountService) {}

  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.count.countInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.count.countActive();
  }
}

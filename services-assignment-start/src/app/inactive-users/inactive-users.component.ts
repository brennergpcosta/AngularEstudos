import { Component, OnInit } from "@angular/core";
import { UserDataService } from "../services/user-data.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  constructor(
    private userDataService: UserDataService,
  ) {}

  ngOnInit() {
    this.users = this.userDataService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userDataService.setToActive(id);
  }
}

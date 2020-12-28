import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../user.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  id: number;
  activated: boolean = true;

  constructor(private route: ActivatedRoute, private UserService: UserService) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
    });
  }

  onActivate() {
    this.UserService.activatedEmiiter.next(this.activated);
    this.activated = !this.activated;
  }
}

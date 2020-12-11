import { Component, OnInit, Input } from "@angular/core";
import { AccountService } from "./account.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }
}

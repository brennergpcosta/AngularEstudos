import { Component, Input } from "@angular/core";
import { AccountService } from "../account.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private acountService: AccountService) {
    this.acountService.statusUpdated.subscribe((status: string) =>
      alert("New status: " + status)
    );
  }

  onSetTo(status: string) {
    this.acountService.updateStatus(this.id, status);
    this.acountService.statusUpdated.emit(status);
  }
}

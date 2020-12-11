import { Component, OnInit } from "@angular/core";
import { CountService } from "./services/count.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  activeCount: number;
  inactiveCount: number;

  constructor(private count: CountService) {}

  ngOnInit() {
    this.activeCount = this.count.counterToActive;
    this.inactiveCount = this.count.counterToInactive;
  }
}

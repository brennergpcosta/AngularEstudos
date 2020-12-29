import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") formInfo: NgForm;

  submited: boolean = false;

  user = {
    email: "",
    subType: "",
    password: "",
  };

  defaultSubscription: string = "Advanced";

  onSubmit() {
    console.log(this.formInfo);

    this.submited = true

    this.user.email = this.formInfo.value.email;
    this.user.subType = this.formInfo.value.subscriptionType;
    this.user.password = this.formInfo.value.password;

    this.formInfo.reset();
  }
}

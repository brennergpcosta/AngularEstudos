import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") formInfo: NgForm;
  defaultQuestion = "pet";
  answer: string;
  genders = ["male", "female"];

  suggestUserName() {
    const suggestedName = "Superuser";
  }

  // onSubmmit(form: NgForm) {
  //   console.log(form.value.username);
  // }

  onSubmit() {
    console.log(this.formInfo);
  }
}

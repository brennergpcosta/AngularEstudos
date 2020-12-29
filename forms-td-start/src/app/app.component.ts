import { stringify } from "@angular/compiler/src/util";
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
  genders = ["Male", "Female"];

  user = {
    username: "",
    email: "",
    secretQuestion: "",
    answer: "",
    gender: "",
  };

  submited: boolean = false;

  suggestUserName() {
    const suggestedName = "Superuser";
    // this.formInfo.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   secretQuestion: {
    //     gender: "",
    //     questionAnswer: "",
    //     secret: "",
    //   },
    // });
    this.formInfo.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  // onSubmmit(form: NgForm) {
  //   console.log(form.value.username);
  // }

  onSubmit() {
    this.submited = true;
    console.log(this.formInfo);
    this.user.username = this.formInfo.value.userData.username;
    this.user.email = this.formInfo.value.userData.email;
    this.user.secretQuestion = this.formInfo.value.secretQuestion.secret;
    this.user.answer = this.formInfo.value.secretQuestion.questionAnswer;
    this.user.gender = this.formInfo.value.secretQuestion.gender;

    this.formInfo.reset();
  }
}

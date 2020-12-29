import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  formInfo: FormGroup;
  forbidenUserNames = ["Chris", "Anna"];

  ngOnInit() {
    this.formInfo = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [
          Validators.required,
          this.forbidenNames.bind(this),
        ]),
        'email': new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),
      'gender': new FormControl("male"),
      'hobbies': new FormArray([]),
    });
    // this.formInfo.value.subscribe(
    //   ((value) => {
    //     console.log(value)
    //   })
    // )

    // this.formInfo.statusChanges.subscribe(
    //   ((value) => {
    //     console.log(value)
    //   })
    // )

    // this.formInfo.setValue({
    //   'userData': {
    //     'username': 'Max',
    //     'email': 'max@test.com',
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // })

    // this.formInfo.patchValue({
    //   'userData': {
    //     'username': 'Anna'
    //   },
    // });
  }

  onSubmit() {
    this.formInfo.reset({'gender': 'male'});
    console.log(this.formInfo);
  }

  onAddHobby() {
    const control: FormControl = new FormControl(null, Validators.required);
    (<FormArray>this.formInfo.get("hobbies")).push(control);
  }

  getHobbieControls() {
    return (<FormArray>this.formInfo.get("hobbies")).controls;
  }

  forbidenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbidenUserNames.indexOf(control.value) !== -1) {
      return { nameIsForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsForbideen: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}

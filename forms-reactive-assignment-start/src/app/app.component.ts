import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  projectStatusArray: string[] = ["Stable", "Clitical", "Finished"];
  formInfo: FormGroup;

  ngOnInit() {
    this.formInfo = new FormGroup({
      'projectName': new FormControl(
        null,
        [Validators.required, this.projectNameValidator], this.asyncProjectNameValidator),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl(null),
    });
  }

  projectNameValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Test") {
      return { ProjectNameCannotBeTest: true };
    }
    return null;
  }

  asyncProjectNameValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "TestTest") {
          resolve({ ProjectNameCannotBeTest: true });
        } else {
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }


  onSubmit(){
    console.log(this.formInfo.value)
  }
}

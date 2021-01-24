import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html'
})

export class AuthComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService) { }
  authForm: FormGroup;
  isLoading: any = false;

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: ['seiseisei', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSignup(){
    if(!this.authForm.valid){
      return;
    }
    this.isLoading = true;
    console.log(`isLoading: ${this.isLoading}`)
    this.authService.signup(this.authForm.value.email, this.authForm.value.password).subscribe(resData => {
      console.log(resData);
      this.isLoading = false;
    }, error => {
      console.log(`Error Message: ${error.message}`);
      this.isLoading = false;
    })
  }

  onLogin(){
    this.isLoading = true;

    console.log(this.authForm.value);
    this.isLoading = false;
  }

}

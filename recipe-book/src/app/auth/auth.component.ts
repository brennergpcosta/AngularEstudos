import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  authForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    console.log('isLoginMode: ', this.isLoginMode);

    this.authForm = this.fb.group({
      email: ['asdf@asdf.com', [Validators.required, Validators.email]],
      password: ['123456@@@@FF%%fafs', [Validators.required]],
    });
  }

  onSubmit() {
    if (!this.authForm.valid) {
      return;
    }
    this.isLoading = true;

    // console.log(this.authForm.value);
    let authObservable: Observable<AuthResponseData>;

    const newUser = this.authForm.value;
    if (!this.isLoginMode) {
      authObservable = this.authService.signUpUser(
        newUser.email,
        newUser.password
      );
    } else {
      authObservable = this.authService.loginUser(
        newUser.email,
        newUser.password
      );
    }

    authObservable.subscribe(
      (responseData) => {
        console.log('ResponseData: ', responseData);
        this.isLoading = false;
        this.router.navigate(['./recipes']);
      },
      (errorMessage) => {
        console.log('Error: ', errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    this.authForm.reset({ email: '', password: '' });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
}

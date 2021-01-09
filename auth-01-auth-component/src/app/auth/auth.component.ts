import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  authForm: FormGroup;

  // ngOnInit() {
  //   this.authForm = new FormGroup({
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //     password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  //   })
  // }

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.authForm = this.fb.group({
      email: ['asdf@asdf.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]]
    })
  }

  onLogin(){
    console.log(this.authForm.value);
    this.authForm.reset({email: '', password: ''})
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}

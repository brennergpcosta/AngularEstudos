import {
  Component,
  ComponentFactoryResolver,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AlertComponent } from '../shared/alert/alert.component';
import { PlaceholderDirective } from '../shared/placeholder/placeholder.directive';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;
  authForm: FormGroup;

  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  private subs: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ['asdf@asdf.com', [Validators.required, Validators.email]],
      password: ['123456@@@@FF%%fafs', [Validators.required]],
    });
  }

  ngOnDestroy(){
    if (this.subs) {
      this.subs.unsubscribe();
    }
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
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );

    this.authForm.reset({ email: '', password: '' });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;

    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.subs = componentRef.instance.close.subscribe(() => {
      this.subs.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}

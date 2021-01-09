import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {}

  signUpUser(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB7W4MNZyidq7vKUOuLr0hjxW27cFcb0Fk',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.hadleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  loginUser(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB7W4MNZyidq7vKUOuLr0hjxW27cFcb0Fk',
        { email: email, password: password, returnSecureToken: true }
      )
      .pipe(
        catchError(this.hadleError),
        tap((resData) => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn
          );
        })
      );
  }

  logout(){
    this.user.next(null);
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number
  ) {
    const expirationData = new Date(new Date().getTime() + +expiresIn * 1000);
    const user = new User(email, userId, token, expirationData);
    this.user.next(user);
  }

  private hadleError(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    let errorMessage = 'An unknow error occurred!';
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This Email and/or Password are Incorrect.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This Email and/or Password are Incorrect.';
        break;
      case 'USER_DISABLED':
        errorMessage =
          'The user account has been disabled by an administrator.';
        break;
      case 'OPERATION_NOT_ALLOWED':
        errorMessage = 'Password sign-in is disabled for this project';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorMessage =
          'Too Many Attempts. We have blocked all requests from this device due to unusual activity. Try again later.';
        break;
    }
    return throwError(errorMessage);
  }
}

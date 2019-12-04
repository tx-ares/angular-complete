import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public isLoginMode = true;
  public isLoading = false;
  public error: string = null;

  constructor(private authService: AuthService,
              private router: Router) { }

  public onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  public onSubmit(authForm: NgForm) {

    if (!authForm.valid) {
      return;
    }

    const email = authForm.value.email;
    const password = authForm.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signUp(email, password);
    }

    authObs.subscribe(
      resp => {
        console.log(resp);
        this.isLoading = false;
        this.router.navigate(['/recipes']); // Use programmatic routing once user is successfully authenticated
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    authForm.reset();
  }

  public onHandleError() {
    this.error = null;
  }

}

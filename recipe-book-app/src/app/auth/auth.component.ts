import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public isLoginMode = true;
  public isLoading = false;
  public error: string = null;

  constructor(private authService: AuthService) { }

  public onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  public onSubmit(authForm: NgForm) {

    if (!authForm.valid) {
      return;
    }

    const email = authForm.value.email;
    const password = authForm.value.password;

    this.isLoading = true;
    if (this.isLoginMode) {

    } else {
      this.authService.signUp(email, password)
      .subscribe(resp => {
        console.log(resp);
        this.isLoading = false;
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      });
    }

    authForm.reset();
  }

  public ngOnInit() { }

}

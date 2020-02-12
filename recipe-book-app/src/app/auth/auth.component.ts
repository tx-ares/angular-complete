import { Component, ComponentFactoryResolver, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from 'app/shared/alert/alert.component';
import { PlaceholderDirective } from 'app/shared/placeholder/placeholder.directive';
import { Store } from '@ngrx/store';

import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnDestroy, OnInit {

  public isLoginMode = true;
  public isLoading = false;
  public error: string = null;
  public closeSub: Subscription;
  @ViewChild(PlaceholderDirective, { static: false }) alertHost: PlaceholderDirective; // By passing in a class to ViewChild, it will find the first instance of said class.

  constructor(private authService: AuthService,
              private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver,
              private store: Store<fromApp.AppState>) { }

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
      // authObs = this.authService.login(email, password);
      this.store.dispatch(new AuthActions.LoginStart({ email: email, password: password })); // Since this does not return an obseravable certain things like router navigation won't work because it will no longer be notified when this is completed.
    } else {
      authObs = this.authService.signUp(email, password);
    }

    // authObs.subscribe(
    //   resp => {
    //     console.log(resp);
    //     this.isLoading = false;
    //     this.router.navigate(['/recipes']); // Use programmatic routing once user is successfully authenticated
    //   },
    //   errorMessage => {
    //     this.showErrorAlert(errorMessage);
    //     this.isLoading = false;
    //   }
    // );

    authForm.reset();
  }

  public onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent); // This is how I can programatically create a component using Angular's syntax to do so using the ComponentFactoryResolver class.
    const hostViewContainerRef = this.alertHost.viewContainerRef;

    hostViewContainerRef.clear(); // This will clear anything that was previously rendered in our ViewContainer.
    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  public ngOnInit(): void {
    this.store.select('auth').subscribe(authState => {
      this.isLoading = authState.loading;
      this.error = authState.authError;
      if (this.error) {
        this.showErrorAlert(this.error);
      }
    });
  }

  public ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}

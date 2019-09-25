import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public isLoginMode = true;

  public onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  public ngOnInit() { }

}

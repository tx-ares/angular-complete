import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  public defaultQuestion = 'pet';
  public answer = '';
  public genders = ['male', 'female'];
  public user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  public submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    this.signupForm.form.patchValue({
      userData: {
        userName: suggestedName
      }
    });
  }

  onSubmit(form: NgForm) {
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;
    this.submitted = true;

    this.signupForm.reset();
  }
}

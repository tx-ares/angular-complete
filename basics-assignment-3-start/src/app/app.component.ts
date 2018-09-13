import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageVisible = false;
  timeStamp: {};
  messages = [];
  currentIndex = 0;

  public addMessage() {
    this.messageVisible = true;
    this.timeStamp = new Date();
    this.currentIndex++;
    this.messages.push(this.timeStamp);
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loadedPosts = [];

  constructor(private http: HttpClient) {}

  public ngOnInit() {}

  public onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://angular-complete-b4f4a.firebaseio.com/posts.json', // Firebase's api requires that we send a request as JSON in the url
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  public onFetchPosts() {
    // Send Http request
  }

  public onClearPosts() {
    // Send Http request
  }
}

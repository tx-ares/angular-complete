import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loadedPosts = [];

  constructor(private http: HttpClient) {}

  public ngOnInit() {
    this.onFetchPosts();
  }

  public onCreatePost(postData: { title: string; content: string }) {
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
    this.http.get('https://angular-complete-b4f4a.firebaseio.com/posts.json')
    .pipe(
      map(responseData => {
        const postsArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key });
          }
        }
      })
    )
    .subscribe( (posts) => {
      console.log(posts);
    });
  }

  public onClearPosts() {
    // Send Http request
  }
}

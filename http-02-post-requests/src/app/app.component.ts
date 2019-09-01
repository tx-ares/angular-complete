import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

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

  public onCreatePost(postData: Post) {
    this.http
      .post<{ name: string }>( // You can also type cast http client's post & get methods to inform TypeScript what type of object is being retrieved or sent.
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
      map((responseData: {[key: string]: Post }) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key], id: key });
          }
        }
        return postsArray;
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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  public createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };

    this.http
    .post<{ name: string }>( // You can also type cast http client's post & get methods to inform TypeScript what type of object is being retrieved or sent.
      'https://angular-complete-b4f4a.firebaseio.com/posts.json', // Firebase's api requires that we send a request as JSON in the url
      postData
    )
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

  public fetchPosts() {
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
      //
    });
  }
}

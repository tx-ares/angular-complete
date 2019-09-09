import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public error = new Subject<string>();

  constructor(private http: HttpClient) {}

  public createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };

    return this.http
            .post<{ name: string }>( // You can also type cast http client's post method to inform TypeScript what type of object is being retrieved or sent.
              'https://angular-complete-b4f4a.firebaseio.com/posts.json', // Firebase's api requires that we send a request as JSON in the url
              postData,
              {
                observe: 'response',
                responseType: 'json'
              }
            );
  }

  public fetchPosts() {
    return this.http
            .get(
              'https://angular-complete-b4f4a.firebaseio.com/posts.json',
              {
                headers: new HttpHeaders({'Custom-Header': 'MyCustomHeader!'}),
                params: new HttpParams().set('print', 'pretty')
              })
            .pipe(
              map((responseData: {[key: string]: Post }) => {
                const postsArray: Post[] = [];
                for (const key in responseData) {
                  if (responseData.hasOwnProperty(key)) {
                    postsArray.push({...responseData[key], id: key });
                  }
                }
                return postsArray;
              }),
              catchError(errorResponse => {
                // Send to analytics server... etc.
                return throwError(errorResponse); // This will return an observable for the error object.
              })
            );
  }

  public clearAllPosts() {
    return this.http.delete(
      'https://angular-complete-b4f4a.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'json'
      }
    ).pipe(tap(event => {
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        // Example of a event type that could be used to update something in the UI.
      }

      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public loadedPosts: Post[] = [];
  public isFetching = false;
  public error = null;
  public subscriptions: Subscription[] = [];

  @ViewChild('postForm', {static: false}) postForm: NgForm;

  constructor(private http: HttpClient,
              private postService: PostService) {}

  public ngOnInit() {
    this.isFetching = true;

    this.subscriptions.push(this.postService.error.subscribe((errorMessage) => {
      this.error.next(errorMessage);
    }));

    this.subscriptions.push(this.postService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    }));
  }

  public onCreatePost(postData: Post) {
    this.subscriptions.push(this.postService.createAndStorePost(postData.title, postData.content).subscribe(() => {
      this.postForm.reset();
      this.onFetchPosts();
    }));
  }

  public onFetchPosts() {
    this.isFetching = true;
    this.subscriptions.push(this.postService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
      }
    ));
  }

  public onClearPosts() {
    this.subscriptions.push(this.postService.clearAllPosts().subscribe(() => {
      this.loadedPosts = [];
    }));
  }

  public onHandleError() {
    this.error = null;
  }

  public ngOnDestroy() {
    for ( const sub of this.subscriptions ) {
      sub.unsubscribe();
    }
  }
}

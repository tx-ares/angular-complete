import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loadedPosts: Post[] = [];
  public isFetching = false;

  constructor(private http: HttpClient,
              private postService: PostService) {}

  public ngOnInit() {
    this.postService.fetchPosts();
  }

  public onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  public onFetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts();
  }

  public onClearPosts() {
    // Send Http request
  }
}

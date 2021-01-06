import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostService } from "./post.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFeatching: boolean = false;
  errorMsg = null;

  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.postService.error.subscribe((error: string) => {
      this.errorMsg = error;
    })

    this.isFeatching = true;
    this.postService.fetchPosts().subscribe((posts: Post[]) => {
      this.isFeatching = false;
      this.loadedPosts = posts;
    }, (error) => {
      this.errorMsg = error.message;
    });
  }

  ngOnDestroy(){
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFeatching = true;
    this.postService.fetchPosts().subscribe((posts: Post[]) => {
      this.isFeatching = false;
      this.loadedPosts = posts;
    }, (error) => {
      this.errorMsg = error;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private fetchPosts() {
    this.isFeatching = true;
    this.postService.fetchPosts().subscribe((posts: Post[]) => {
      this.isFeatching = false;
      this.loadedPosts = posts;
    });
  }

  onHandleError() {
    this.errorMsg = null;
    this.isFeatching = false;
  }
}

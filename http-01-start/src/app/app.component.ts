import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { delay, map } from "rxjs/operators";
import { Post } from "./post.model";
import { PostService } from "./post.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFeatching: boolean = false;

  constructor(private http: HttpClient, private postService: PostService) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    // this.http
    //   .post<{ name: string }>(
    //     "https://angular-curse-database-default-rtdb.firebaseio.com/posts.json",
    //     postData
    //   )
    //   .subscribe((responseData) => {
    //     console.log(responseData);
    //   });
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFeatching = true;
    this.postService.fetchPosts();
  }
}

import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/interfaces/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  posts: Post[] = [];
  headerText: string = 'Discover';

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts()
    .subscribe(posts => {
      this.posts = posts
      this.posts.reverse()	
    });
  }

}

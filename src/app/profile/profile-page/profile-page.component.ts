import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { User } from 'src/app/interfaces/user';
import { Image } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user?: User;
  image?: Image;
  userImages?: Image[] = [];
  userPosts?: Post[] = [];
  class: string = 'user-profile';

  constructor(private imageService: ImageService, private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.getUser(1);
  }

  getUser(id: number): void {
    this.userService.getUser(id)
    .subscribe(user => {
      this.user = user
      this.getImage(user.profilePic)
      this.getPosts()
    });
  }

  getImage(id: number): void {
    this.imageService.getImage(id)
    .subscribe(image => this.image = image);
  }

  getPosts(): void {
    this.postService.getPosts()
    .pipe(map(posts => posts.filter(post => post.userId === this.user?.id)))
    .subscribe(posts => {
      this.userPosts = posts
      this.userPosts?.forEach(post => this.getPostImage(post.imageId));
    });
  }

  getPostImage(id: number): void {
    this.imageService.getImage(id)
    .subscribe(image => this.userImages?.push(image));
  }

}

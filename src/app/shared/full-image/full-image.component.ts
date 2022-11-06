import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user';
import { Image } from 'src/app/interfaces/image';

import { ImageService } from 'src/app/services/image.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.scss']
})
export class FullImageComponent implements OnInit {

  post!: Post;
  image!: Image;
  user!: User;

  constructor(
    private route: ActivatedRoute, 
    private location: Location, 
    private postService: PostService,
    private imageService: ImageService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id)
    .subscribe(post => {
      this.post = post;
      this.getImage(this.post.imageId);
      this.getUser(this.post.userId);
    });
  }

  getImage(id: number): void {
    this.imageService.getImage(id)
    .subscribe(image => this.image = image);
  }

  getUser(id: number): void {
    this.userService.getUser(id)
    .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }


}

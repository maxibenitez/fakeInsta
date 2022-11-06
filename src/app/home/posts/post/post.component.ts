import { Component, Input, OnInit } from '@angular/core';

import { User } from 'src/app/interfaces/user';
import { Image } from 'src/app/interfaces/image';

import { ImageService } from 'src/app/services/image.service';
import { Post } from 'src/app/interfaces/post';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post!: Post;
  
  image?: Image;
  user?: User;
  class: string = 'user';

  constructor(private imageService: ImageService, private userService: UserService) { }

  ngOnInit(): void {
    this.getImage(this.post.imageId);
    this.getUser(this.post.userId);
  }

  getImage(id: number): void {
    this.imageService.getImage(id)
    .subscribe(image => this.image = image);
  }

  getUser(id: number): void {
    this.userService.getUser(id)
    .subscribe(user => this.user = user);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewPost } from 'src/app/interfaces/post';
import { Image } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {

  images?: Image[] = [];
  icon: boolean = false;
  modal: boolean = false;
  fileSelected: number = 0;

  constructor(private imageService: ImageService, private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.getImages();
  }

  getImages(): void {
    this.imageService.getImages()
    .subscribe(images => this.images = images);
  }

  selectImage(id: number): void{
    this.fileSelected = id;
    this.closeModal();
  }

  showModal(): void {
    this.modal = true;
  }

  closeModal(): void {
    this.modal = false;
  }

  addPost(): void{
    var newPost = new NewPost('63680d1c2e7d3ba0faacb3f6', this.fileSelected);
    this.postService.addPost(newPost);
    this.router.navigate(['home']);
  }

}

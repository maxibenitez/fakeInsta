import { Component, Input, OnInit } from '@angular/core';

import { Image } from 'src/app/interfaces/image';
import { User } from 'src/app/interfaces/user';

import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  @Input() user?: User;
  @Input() class?: string;

  image?: Image;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    if(this.user){
      this.getImage(this.user.profilePic);
    }
  }

  getImage(id: number): void {
    this.imageService.getImage(id)
    .subscribe(image => this.image = image);
  }

}

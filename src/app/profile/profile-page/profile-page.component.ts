import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/interfaces/user';
import { Image } from 'src/app/interfaces/image';
import { ImageService } from 'src/app/services/image.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  user!: User;
  image!: Image;

  constructor(private imageService: ImageService, private userService: UserService) { }

  ngOnInit(): void {
    this.getUser(1);
  }

  getUser(id: number): void {
    this.userService.getUser(id)
    .subscribe(user => this.user = user);
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'app-images-grid',
  templateUrl: './images-grid.component.html',
  styleUrls: ['./images-grid.component.scss']
})
export class ImagesGridComponent implements OnInit {

  @Input() userImages?: Image[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

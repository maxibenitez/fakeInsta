import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

import { Image } from '../../../app/interfaces/image';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  headerText: string = 'Search';
  results: Image[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  search(term: string){
    console.log(term)

    this.imageService.searchImages(term)
    .subscribe(images => this.results = images);

    console.log(this.results)
  }

}

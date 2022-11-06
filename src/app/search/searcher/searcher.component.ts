import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { map } from 'rxjs/operators';

import { ImageService } from 'src/app/services/image.service';
import { Image } from 'src/app/interfaces/image';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  @Output() onKey: EventEmitter<Image[]> = new EventEmitter();

  results: Image[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
  }

  search(term: string){
    this.imageService.getImages()
    .pipe(map(images => images.filter(image => image.description.includes(term))))
    .subscribe(images => {
      this.results = images
      this.onKey.emit(this.results);
    });
  }

}

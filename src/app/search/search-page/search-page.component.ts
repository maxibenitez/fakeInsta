import { Component, OnInit } from '@angular/core';

import { Image } from '../../../app/interfaces/image';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  headerText: string = 'Search';
  results?: Image[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  searchResults(results: Image[]){
    this.results = results;
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  @Output() onKey: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  search(term: string){
    this.onKey.emit(term);
  }

}

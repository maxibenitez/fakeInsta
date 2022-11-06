import { Component, Input, OnInit } from '@angular/core';

import { Image } from '../../../app/interfaces/image';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() results: Image[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

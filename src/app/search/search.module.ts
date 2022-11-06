import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearcherComponent } from './searcher/searcher.component';
import { ResultsComponent } from './results/results.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearcherComponent,
    ResultsComponent,
    SearchPageComponent
  ],
  exports: [
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SearchModule { }

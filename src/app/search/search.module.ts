import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearcherComponent } from './searcher/searcher.component';
import { ResultsComponent } from './results/results.component';
import { SearchPageComponent } from './search-page/search-page.component';



@NgModule({
  declarations: [
    SearcherComponent,
    ResultsComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }

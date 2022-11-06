import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PostsGridComponent } from './posts/posts-grid/posts-grid.component';
import { PostComponent } from './posts/post/post.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomePageComponent,
    PostsGridComponent,
    PostComponent
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    NgbModule
  ]
})
export class HomeModule { }

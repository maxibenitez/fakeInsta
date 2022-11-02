import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PostsGridComponent } from './posts/posts-grid/posts-grid.component';
import { PostComponent } from './posts/post/post.component';



@NgModule({
  declarations: [
    HomePageComponent,
    PostsGridComponent,
    PostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }

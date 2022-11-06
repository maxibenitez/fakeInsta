import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatsPageComponent } from './chats/chats-page/chats-page.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ProfilePageComponent } from './profile/profile-page/profile-page.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { FullImageComponent } from './shared/full-image/full-image.component';
import { UploadPageComponent } from './upload/upload-page/upload-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'search',
    component: SearchPageComponent
  },
  {
    path: 'upload',
    component: UploadPageComponent
  }
  ,
  {
    path: 'chats',
    component: ChatsPageComponent
  },
  {
    path: 'profile',
    component: ProfilePageComponent
  },
  {
    path: 'posts/:id',
    component: FullImageComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

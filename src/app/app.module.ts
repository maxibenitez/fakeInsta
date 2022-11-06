import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatsModule } from './chats/chats.module';
import { HomeModule } from './home/home.module';
import { ProfileModule } from './profile/profile.module';
import { SearchModule } from './search/search.module';
import { SharedModule } from './shared/shared.module';
import { UploadModule } from './upload/upload.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './services/user.service';
import { ImageService } from './services/image.service';
import { PostService } from './services/post.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatsModule,
    HomeModule,
    ProfileModule,
    SearchModule,
    SharedModule,
    UploadModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    UserService,
    ImageService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatsPageComponent } from './chats-page/chats-page.component';
import { ChatsPreviewComponent } from './chats-preview/chats-preview.component';
import { ChatComponent } from './chat/chat.component';



@NgModule({
  declarations: [
    ChatsPageComponent,
    ChatsPreviewComponent,
    ChatComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatsModule { }

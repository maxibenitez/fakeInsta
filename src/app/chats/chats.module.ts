import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatsPageComponent } from './chats-page/chats-page.component';
import { ChatsPreviewComponent } from './chats-preview/chats-preview.component';
import { ChatComponent } from './chat/chat.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ChatsPageComponent,
    ChatsPreviewComponent,
    ChatComponent
  ],
  exports: [
    ChatsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ChatsModule { }

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats-page',
  templateUrl: './chats-page.component.html',
  styleUrls: ['./chats-page.component.scss']
})
export class ChatsPageComponent implements OnInit {

  headerText: string = 'Chats';

  constructor() { }

  ngOnInit(): void {
  }

}

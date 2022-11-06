import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

  headerText: string = 'Upload picture';
  buttonText: string = 'Upload';
  icon: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

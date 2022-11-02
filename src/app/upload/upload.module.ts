import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { UploadFormComponent } from './upload-form/upload-form.component';



@NgModule({
  declarations: [
    UploadPageComponent,
    UploadFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UploadModule { }

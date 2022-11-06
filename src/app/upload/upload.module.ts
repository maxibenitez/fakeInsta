import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadPageComponent } from './upload-page/upload-page.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UploadPageComponent,
    UploadFormComponent
  ],
  exports: [
    UploadPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class UploadModule { }

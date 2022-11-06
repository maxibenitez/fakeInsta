import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProfilePageComponent,
    ImagesGridComponent
  ],
  exports: [
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ProfileModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { FullImageComponent } from './full-image/full-image.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    UserInfoComponent,
    FullImageComponent,
    ButtonComponent
  ],
  exports: [
    ButtonComponent,
    FullImageComponent,
    HeaderComponent,
    NavbarComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }

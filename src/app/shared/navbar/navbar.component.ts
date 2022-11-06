import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentPath: string = '';

  constructor(private location: Location) { }

  ngOnInit(): void {
    this.currentPath = this.location.path();
  }

}

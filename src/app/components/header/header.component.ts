/*! @file header.component.ts */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // insert property
  title: string = 'task tracker 2'; // add type, best practise

  constructor() { }

  ngOnInit(): void {
  }

  toggleAddTask() {
    // debug output to console
    console.log( 'toggle 2' );
  }

}

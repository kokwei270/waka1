/*! @file button.component.ts */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// not this one: import { EventEmitter } from 'stream'; 
// Input: input parameter to app-button
// Output: to enable event emittor
// EventEmitter: must import so that can output

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // input parameters to app-button
  // ! = make param optional to prevent complain
  // strictPropertyInitialization
  @Input() text!: string;
  @Input() color!: string;

  @Output() btnClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  // define other methods
  onClick() {
    //console.log( 'Add' );
    this.btnClick.emit();
  }

}

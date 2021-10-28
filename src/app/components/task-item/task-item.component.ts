
// add: input, add: output + emitter
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// input and interface
import { Task } from '../../Task';
// font
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  // event emittor
  @Output() onDeleteTask: EventEmitter< Task > = new EventEmitter();

  // Font
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  // event, accept parameter task
  onDelete( task: Task ) {
    // debug output parameter
    console.log( task );

    // turn to event emit
    console.log( 'emit' );
    this.onDeleteTask.emit( task );

  }

}

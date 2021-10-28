/*! @file tasks.components.ts

    tasks, plural, list/table of task items
 */

// import component
import { Component, OnInit } from '@angular/core';

// import service
import { TaskService } from '../../services/task.service';

// import interface and data
import {Task} from '../../Task';

// replace with service
//import {TASKS} from '../../mock.tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // property, set directly to data
  //tasks: Task[] = TASKS; // array set to simulated data
  //constructor() { }
  //ngOnInit(): void { }
  
  // use service, add service in constructor
  tasks: Task[] = []; // init at empty
  constructor( private taskService: TaskService ) { }
  // use service to init data
  ngOnInit(): void {
    //this.tasks = this.taskService.getTasks();
    
    // use observable
    // subscribe with arrow function
    this.taskService.getTasks().subscribe( 
      (tasks) => (this.tasks = tasks) // return the array, don't understand
    );
  }

  // method to catch event, need service
  deleteTask( task: Task ) {
    console.log( 'event delete task' );
    // this.taskService
    //   .deleteTask( task )
    //   .subscribe(
    //     () => ( this.tasks = this.tasks.filter( (t) => t.id ! === task.id ))
    //   )
  }

}

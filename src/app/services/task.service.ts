/*! 
    @file services/task.service.ts
 */

// generated
import { Injectable } from '@angular/core';

// import http from angular
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import observable
import { Observable, of } from 'rxjs';

// tasks
import {Task} from '../Task';
import {TASKS} from '../mock.tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // Http, need add to constructor
  private apiUrl = 'http://localhost:3000/tasks';
  constructor( private http:HttpClient ) { }

  // plural, method returning array of data
  // not using observable
  // getTasks(): Task[] { return TASKS; }
  getTasks(): Observable< Task[] > { 

    // wrap and turn into observable
    // const tasks = of( TASKS ); 
    // return tasks; 

    // turn into http service
    return this.http.get<Task[]>( this.apiUrl );

  }

  // service take in task from event, return observable 
  deleteTask( task: Task ): Observable< Task > {
    const url = `${ this.apiUrl }/${ task.id }`;
    return this.http.delete< Task >( url );
  }

}

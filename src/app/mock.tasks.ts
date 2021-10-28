/*! @file mock.tasks.ts 
 *
 *  Simulate database
 */

import { Task } from './Task'; // Task.ts

// Task[] array
export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Doctors Appointment (mock.tasks.ts)',
    day: 'May 5th at 2:30pm',
    reminder: true,
    /* time: 23, // cannot have this, type/interface Task is defined */
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'May 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
];

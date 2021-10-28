/*! @file Task.ts */

// Interface, used by mock.tasks.ts
export interface Task {
    id?: number; // optional: no id if task is not saved.
    text: string;
    day: string;
    reminder: boolean;
}

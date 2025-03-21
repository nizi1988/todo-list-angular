import { Component } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { LinkComponent } from "../form/link/link.component";
import {Task} from "../../interfaces/task";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-task-list',
  imports: [ LinkComponent, TaskComponent, NgForOf ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  tasksList: Task[] =[
    {
      id: 0,
      title: 'Task 1',
      completed: true
    },
    {
      id: 1,
      title: 'Task 2',
      completed: false
    },
    {
      id: 3,
      title: 'Task 3',
      completed: true
    },
  ]

  sortedTask(): Task[] {
    return this.tasksList.sort((a, b) =>  + a.completed - + b.completed);
  }
}

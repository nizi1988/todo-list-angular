import { Component, Signal } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { LinkComponent } from "../form/link/link.component";
import {Task} from "../../interfaces/task";
import {NgForOf} from "@angular/common";
import {TasksService} from "../../services/tasks/tasks.service";

@Component({
  selector: 'app-task-list',
  imports: [ LinkComponent, TaskComponent, NgForOf ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  taskList: Signal<Task[]>;
  sortedList: Signal<Task[]>;

  constructor(public tasksService: TasksService) {
    this.taskList = tasksService.taskList;
    this.sortedList = tasksService.sortedList;

    console.log(this.taskList());
    console.log(this.sortedList());
  }

}

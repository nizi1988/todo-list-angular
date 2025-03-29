import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { LinkComponent } from "../form/link/link.component";
import { SelectComponent } from "../form/select/select.component";
import { NgForOf } from "@angular/common";
import { TasksService } from "../../services/tasks/tasks.service";

@Component({
  selector: 'app-task-list',
  imports: [ LinkComponent, TaskComponent, SelectComponent, NgForOf ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() options: Array<{ key: string, label: string }> = [];

  constructor(public tasksService: TasksService) {
  }

  ngOnInit(){
    //set options for filter
    this.options= [
      { key: 'all', label: 'All' },
      { key: 'completed', label: 'Completed tasks' },
      { key: 'open', label: 'Open tasks' },
    ]
  }

  //if select for filter changes, send value to service
  changeFilter(value: string){
    this.tasksService.filterTasks(value);
  }

  changeComplete(id: number) {
    //get current task, where completed state should be changed
    const currentTask = this.tasksService.getTaskById(id);

    if (currentTask) {
      //update task with new completed state and send it to service
      const updatedTask = { ...currentTask, completed: !currentTask.completed };
      this.tasksService.updateTask(id, updatedTask);
    }
  }

  deleteTask(id: number) {
    //send id from task to service, to delete task
    this.tasksService.deleteTask(id);
  }
}

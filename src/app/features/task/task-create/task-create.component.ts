import { Component, Input, NgModule } from '@angular/core';
import { TasksService } from "../../../services/tasks/tasks.service";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Task } from "../../../interfaces/task";
import {FormComponent} from "../../../components/form/form/form.component";

@Component({
  selector: 'app-task-create',
  imports: [
    ReactiveFormsModule,
    FormComponent
  ],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss'
})
export class TaskCreateComponent {
  @Input() headline: string = '';
  @Input() modelTitle: NgModule;

  // Define a static task object, so we can use ng-model for creating and editing
  staticTask: Task = {
    id: 0,
    title: '',
    completed: false,
  };

  constructor( private tasksService: TasksService ) {
  }

  onSubmit(formGroup: FormGroup) {
    const task = {
      title:  formGroup.value.taskTitle,
      completed: formGroup.value.completed,
    } as Task;

    this.tasksService.createTask(task);
  }

}

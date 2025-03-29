import { Component, Input, NgModule } from '@angular/core';
import { TasksService } from "../../../services/tasks/tasks.service";
import  { Task } from "../../../interfaces/task";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import {FormComponent} from "../../../components/form/form/form.component";

@Component({
  selector: 'app-task-edit',
  imports: [
    ReactiveFormsModule,
    FormComponent
  ],
  templateUrl: './task-edit.component.html',
  styleUrl: './task-edit.component.scss'
})
export class TaskEditComponent {
  @Input() action: string = '';
  @Input() headline: string = '';
  @Input() modelTitle: NgModule;
  @Input() task: Task;

  constructor(private tasksService: TasksService, private route: ActivatedRoute) {
  }

  ngOnInit(){
    //get the task id from the route, to retrieve the task from the service
    const routeIdAsNumber = +this.route.snapshot.paramMap.get('id')!;
    this.task = this.tasksService.getTaskById(routeIdAsNumber)!;
  }

  onSubmit(formGroup: FormGroup){
    //update the task with the new values and send it to the service
    if (this.task) {
      const updatedTask = {
        ...this.task,
        title: formGroup.value.taskTitle,
        completed: formGroup.value.completed
      };

      this.tasksService.updateTask(updatedTask.id, updatedTask);
    }
  }
}

import { Component, Input, NgModule } from '@angular/core';
import { TasksService } from "../../../services/tasks/tasks.service";
import { BtnComponent } from "../../../components/form/btn/btn.component";
import { CheckboxComponent } from "../../../components/form/checkbox/checkbox.component";
import { HelperComponent } from "../../../components/form/helper/helper.component";
import { InputComponent } from "../../../components/form/input/input.component";
import { LinkComponent } from "../../../components/form/link/link.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Task } from "../../../interfaces/task";

@Component({
  selector: 'app-task-create',
  imports: [
      BtnComponent,
    CheckboxComponent,
    HelperComponent,
    InputComponent,
    ReactiveFormsModule,
    LinkComponent
  ],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss'
})
export class TaskCreateComponent {
  @Input() action: string = '';
  @Input() headline: string = '';
  @Input() modelTitle: NgModule;

  constructor( private tasksService: TasksService ) {
  }

  taskFormGroup = new FormGroup({
    taskTitle: new FormControl<string | null>(null, [Validators.required]),
    completed: new FormControl<boolean | null>(false),
  });

  onSubmit(){
    const task = {
      title:  this.taskFormGroup.value.taskTitle,
      completed: this.taskFormGroup.value.completed,
    } as Task;


    this.tasksService.createTask(task);
  }

}

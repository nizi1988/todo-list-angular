import {Component, Input,NgModule } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup,FormsModule, Validators } from '@angular/forms';
import { CheckboxComponent } from "../form/checkbox/checkbox.component";
import { InputComponent } from "../form/input/input.component";
import { HelperComponent } from "../form/helper/helper.component";
import {BtnComponent} from "../form/btn/btn.component";
import { TasksService } from "../../services/tasks/tasks.service";
import {Task} from "../../interfaces/task";

@Component({
  selector: 'app-task-form',
  imports: [ InputComponent,CheckboxComponent, HelperComponent, BtnComponent, ReactiveFormsModule, FormsModule ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
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

    //redirect to overview
  }

}

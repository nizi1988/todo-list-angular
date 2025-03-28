import {Component, Input, NgModule, Signal} from '@angular/core';
import { input, effect } from "@angular/core";
import { TasksService } from "../../../services/tasks/tasks.service";
import {BtnComponent} from "../../../components/form/btn/btn.component";
import {CheckboxComponent} from "../../../components/form/checkbox/checkbox.component";
import {HelperComponent} from "../../../components/form/helper/helper.component";
import {InputComponent} from "../../../components/form/input/input.component";
import  { Task } from "../../../interfaces/task";
import {FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  imports: [
    BtnComponent,
    CheckboxComponent,
    HelperComponent,
    InputComponent,
    ReactiveFormsModule
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
  
  taskUpdateGroup = new FormGroup({
    taskTitle: new FormControl<string | null>(null, [Validators.required]),
    completed: new FormControl<boolean | null>(false),
  });

  ngOnInit(){
    //get the task id from the route, to retrieve the task from the service
    const routeIdAsNumber = +this.route.snapshot.paramMap.get('id')!;
    this.task = this.tasksService.getTaskById(routeIdAsNumber)!;
  }

  onSubmit(){
    //update the task with the new values and send it to the service
    if (this.task) {
      const updatedTask = {
        ...this.task,
        title: <string>this.taskUpdateGroup.value.taskTitle,
        completed: <boolean>this.taskUpdateGroup.value.completed
      };

      this.tasksService.updateTask(updatedTask.id, updatedTask);
    }
  }
}

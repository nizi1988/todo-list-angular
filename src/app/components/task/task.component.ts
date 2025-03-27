import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/task';
import { CheckboxComponent } from "../form/checkbox/checkbox.component";
import {ReactiveFormsModule, FormGroup, FormControl, Validators} from "@angular/forms";
import {LinkComponent} from "../form/link/link.component";

@Component({
  selector: 'app-task',
  imports: [CheckboxComponent, ReactiveFormsModule, LinkComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: Task;

  taskUpdate = new FormGroup({
    completed: new FormControl<boolean | null>(false),
  });

  onSubmit(){
    console.log('submitted')
  }
}

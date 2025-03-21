import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/task';
import { CheckboxComponent } from "../form/checkbox/checkbox.component";

@Component({
  selector: 'app-task',
  imports: [ CheckboxComponent ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: Task;
}

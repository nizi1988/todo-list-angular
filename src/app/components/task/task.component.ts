import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() taskDelete = new EventEmitter<void>();
  @Output() changeComplete = new EventEmitter<void>();

  //send delete event to parent component, for deletion
  onTaskDelete() {
    this.taskDelete.emit()
  }

  //send change event to parent component, for updating the task completion status
  onTaskCompleteChange() {
    this.changeComplete.emit()
  }
}

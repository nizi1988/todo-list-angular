import { Component } from '@angular/core';
import { TaskFormComponent } from "../../../components/task-form/task-form.component";
import { TasksService } from "../../../services/tasks/tasks.service";

@Component({
  selector: 'app-task-create',
  imports: [ TaskFormComponent ],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss'
})
export class TaskCreateComponent {
  constructor(public tasksService: TasksService) { }
}

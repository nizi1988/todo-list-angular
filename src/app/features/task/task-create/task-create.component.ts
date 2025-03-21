import { Component } from '@angular/core';
import { TaskFormComponent } from "../../../components/task-form/task-form.component";

@Component({
  selector: 'app-task-create',
  imports: [ TaskFormComponent ],
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.scss'
})
export class TaskCreateComponent {

}

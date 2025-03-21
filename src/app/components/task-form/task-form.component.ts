import { Component, Input } from '@angular/core';
import { CheckboxComponent } from "../form/checkbox/checkbox.component";
import { InputComponent } from "../form/input/input.component";
import {BtnComponent} from "../form/btn/btn.component";

@Component({
  selector: 'app-task-form',
  imports: [CheckboxComponent, InputComponent, BtnComponent],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.scss'
})
export class TaskFormComponent {
  @Input() action: string = '';
  @Input() title: string = '';

}

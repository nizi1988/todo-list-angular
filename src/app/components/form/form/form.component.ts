import {Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import { TasksService } from "../../../services/tasks/tasks.service";
import { BtnComponent } from "../../../components/form/btn/btn.component";
import { CheckboxComponent } from "../../../components/form/checkbox/checkbox.component";
import { HelperComponent } from "../../../components/form/helper/helper.component";
import { InputComponent } from "../../../components/form/input/input.component";
import { LinkComponent } from "../../../components/form/link/link.component";
import  { Task } from "../../../interfaces/task";
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";

@Component({
  selector: 'app-form',
  imports: [ BtnComponent, CheckboxComponent, HelperComponent, InputComponent, ReactiveFormsModule, LinkComponent ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class FormComponent {
  @Input() headline: string = '';
  @Input() task: Task;
  @Input() createTask: boolean = true;
  @Input() ngModelName: string = '';

  @Output() formSubmit = new EventEmitter();

  constructor(private tasksService: TasksService) {
  }

  taskFormGroup = new FormGroup({
    taskTitle: new FormControl<string | null>(null, [Validators.required]),
    completed: new FormControl<boolean | null>(false),
  });

  //send formgroup data to parent component
  onFormSubmit() {
    this.formSubmit.emit(this.taskFormGroup)
  }
}

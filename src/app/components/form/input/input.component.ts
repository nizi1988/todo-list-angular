import { Component, Input } from '@angular/core';
import {FormControl, ReactiveFormsModule, ControlContainer, FormGroupDirective  } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ ReactiveFormsModule ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class InputComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() control: FormControl;
}
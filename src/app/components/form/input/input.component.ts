import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  private _name: string;
  @Input() name: string = '';
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() control: FormControl;

  get inputValue() {
    return this._name
  }

  set inputValue(value: string) {
    this._name = value;
  }


  @Output() valueChange = new EventEmitter();

  valueChanging() {
    this.valueChange.emit(this.name);
  }
}
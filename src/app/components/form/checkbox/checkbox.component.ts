import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, ControlContainer, FormGroupDirective } from "@angular/forms";

@Component({
  selector: 'app-checkbox',
  imports: [ ReactiveFormsModule ],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective
    }
  ]
})
export class CheckboxComponent {
  @Input() label:  string = '';
  @Input() completed:  boolean = false;
  @Input() control: FormControl;
  @Input() useFormControl: boolean = true;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  @Input() label:  string = '';
  @Input() name:  string = '';
  @Input() checked:  boolean = false;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-helper',
  imports: [],
  templateUrl: './helper.component.html',
  styleUrl: './helper.component.scss'
})
export class HelperComponent {
  @Input() text: string = '';
  @Input() className: string = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  imports: [],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss',
  standalone: true,
})
export class BtnComponent {
  @Input() label: string = '';
  @Input() type: 'button' | 'submit' = 'submit';
  @Input() disabled: boolean = false;
}

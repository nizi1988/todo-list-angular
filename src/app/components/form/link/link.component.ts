import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-link ',
  imports: [ RouterLink ],
  templateUrl: './link.component.html',
  styleUrl: './link.component.scss',
  standalone: true,
})
export class LinkComponent {
  @Input() label: string = '';
  @Input() href: string = '/';
  @Input() className: string = '';

  get classes(): string {
    return `link ${this.className}`;
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-select',
  imports: [NgForOf],
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {
  @Input() name: string = '';
  @Input() required: boolean = false;
  @Input() options: Array<{ key: string, label: string }> = [];

  @Output() selectChange: EventEmitter<any> = new EventEmitter();

  //add a method to handle the select change event and emit the selected value
  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectChange.emit(selectElement.value);
  }
}

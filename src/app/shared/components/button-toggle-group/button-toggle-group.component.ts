import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-toggle-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-toggle-group.component.html',
  styleUrl: './button-toggle-group.component.css'
})
export class ButtonToggleGroupComponent {
  @Input() options: Array<{id: number | string, label: string, disabled: boolean}> = [];
  @Input() selectOption!: number | string;
  @Output() updateSelectOption = new EventEmitter<number|string> ();

  setOption(id: number | string) {
    this.updateSelectOption.emit(id);
  }
}

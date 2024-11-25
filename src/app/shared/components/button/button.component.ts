import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() item!: { label: string; key: string | number };

  @Output() optionSelect = new EventEmitter<number | string>();

  select(id: string | number) {
    this.optionSelect.emit(id);
  }
}

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent {
  @Input() type: 'success' | 'alert' | 'danger' | 'info' = 'success';
  @Input() dismissible: boolean = false;
  @Output() closed = new EventEmitter<void>();

  isVisible: boolean = true;

  closeAlert() {
    this.isVisible = false;
    this.closed.emit();
  }

  onAlertClosed() {
    console.log('The alert has been closed.');
  }
}

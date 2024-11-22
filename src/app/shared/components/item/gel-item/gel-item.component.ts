import { Component, Input } from '@angular/core';
import { Ratio108Gel } from '../../../models/gel';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-gel-item-1-0-8',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './gel-item.component.html',
  styleUrl: '../item.component.css'
})
export class GelItemComponent {
  @Input() result!: any;
  @Input() costByGel!: Ratio108Gel;
  @Input() numberOfGels = 1;
}

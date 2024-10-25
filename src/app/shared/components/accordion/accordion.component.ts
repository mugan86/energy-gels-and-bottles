import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  standalone: false,
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
  @Input() intro = '';
  @Input() description = '';
  @Input() accordions: Array<{ question: string; answer: string }> = [];

  activeIndex: number | null = null;

  // Función para abrir o cerrar el accordion
  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
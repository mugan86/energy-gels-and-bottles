import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  @Input() select: {
    value: number;
    range: [number, number];
    step?: number,
    extra?: string;
  } = {
    value: 50,
    range: [0, 100],
  };
  @Input() title: string = '';
  @Output() selectValue = new EventEmitter<number>();

  private onInput(value: number) {
    document.getElementById('rangeValue')!.innerText =
      String(value);
  }

  changeValue(value: any) {
    this.selectValue.emit(
      +value['target']['value'] || this.select.value
    );
    this.onInput(+value['target']['value'] || this.select.value);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tw-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input({ required: true }) label?: string;
  @Input() variant?: string;
  @Input() size?: string;

  @Output() onBtnClick = new EventEmitter();

  onClick() {
    this.onBtnClick.emit();
  }
}

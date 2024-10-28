import { Component, Input } from '@angular/core';

@Component({
  selector: 'tw-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styles: ``,
})
export class ButtonComponent {
  @Input() type: string = 'button';
  @Input() label?: string;
  @Input() variant: string = 'sp-btn';
  @Input() size: string = '';
}

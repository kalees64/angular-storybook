import { Component, Input } from '@angular/core';

@Component({
  selector: 'sp-badge',
  standalone: true,
  imports: [],
  templateUrl: './badge.component.html',
  styles: ``,
})
export class BadgeComponent {
  @Input({ required: true }) label?: string;
  @Input({ required: true }) variant?: string;
  @Input() size?: string;
}

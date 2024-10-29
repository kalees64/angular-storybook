import { Component, Input } from '@angular/core';

@Component({
  selector: 'tw-card-widget',
  standalone: true,
  imports: [],
  templateUrl: './card-widget-single.component.html',
  styleUrl: '../card/card.component.css',
})
export class CardWidgetSingleComponent {
  @Input() value: number = 0;
  @Input() label?: string;
  @Input() size?: string;
  @Input() variant?: string;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'tw-spinner',
  standalone: true,
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css',
})
export class SpinnerComponent {
  @Input() size: string = 'small';
  @Input() color: string = 'primary';
}

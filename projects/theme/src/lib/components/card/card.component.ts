import { Component, Input, OnInit } from '@angular/core';
import { I_INPUT_DATA } from './card.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tw-card-widgets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input({ required: true }) data?: any;

  @Input() size?: string = 'medium';

  @Input() classes?: string;

  ngOnInit(): void {
    this.size = this.data?.size;
  }
}

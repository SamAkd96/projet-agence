import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './pricing-card.component.html',
  styleUrl: './pricing-card.component.scss'
})
export class PricingCardComponent {
  @Input() title!: string;
  @Input() price!: string;
  @Input() description!: string;
  @Input() features!: { text: string; image: string; included: boolean }[];
  @Input() isPopular: boolean = false;
}


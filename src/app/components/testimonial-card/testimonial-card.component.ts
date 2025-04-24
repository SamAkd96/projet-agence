import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent {
  @Input()  name: string = '';
  @Input() company: string ='';
  @Input() text: string = '';
  @Input() image: string = '';
  @Input() customClass: string = '';
}

import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-quote',
  standalone: true,
  imports: [
    NgClass,
    NgIf 
  ],
  templateUrl: './testimonial-quote.component.html',
  styleUrl: './testimonial-quote.component.scss'
})
export class TestimonialQuoteComponent {

  @Input() image: string= "";
  @Input() text: string= "";
  @Input() text1: string= "";
  @Input() company: string= "";
  @Input() customClass: string = "";
}

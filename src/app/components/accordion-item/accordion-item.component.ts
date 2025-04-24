import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './accordion-item.component.html',
  styleUrl: './accordion-item.component.scss'
})
export class AccordionItemComponent {
  @Input() title!: string;
  @Input() content!: string;
  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}


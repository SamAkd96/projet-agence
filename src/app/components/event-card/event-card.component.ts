import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})

export class EventCardComponent {
  @Input() day: string = '';
  @Input() month: string = '';
  @Input() year: string = '';
  @Input() time: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() linkText: string = '';
}

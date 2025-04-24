import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-item',
  standalone: true,
  imports: [],
  templateUrl: './check-item.component.html',
  styleUrl: './check-item.component.scss'
})
export class CheckItemComponent {
  @Input() text: string = '';
}

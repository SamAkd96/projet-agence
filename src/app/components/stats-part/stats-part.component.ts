import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-part',
  standalone: true,
  imports: [],
  templateUrl: './stats-part.component.html',
  styleUrl: './stats-part.component.scss'
})
export class StatsPartComponent {

  @Input() value: string = '';
  @Input() label: string = '';
}
 
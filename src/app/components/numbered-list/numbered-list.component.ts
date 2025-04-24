import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-numbered-list',
  standalone: true,
  imports: [],
  templateUrl: './numbered-list.component.html',
  styleUrl: './numbered-list.component.scss'
})
export class NumberedListComponent {
@Input() number: string = '';
@Input() text: string = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-award-list-item',
  standalone: true,
  imports: [],
  templateUrl: './award-list-item.component.html',
  styleUrl: './award-list-item.component.scss'
})
export class AwardListItemComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() date!: string;
  @Input() awardName!: string;
  @Input() awardLogo!: string;
}


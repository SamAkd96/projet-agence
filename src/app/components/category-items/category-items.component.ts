import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-items',
  standalone: true,
  imports: [],
  templateUrl: './category-items.component.html',
  styleUrl: './category-items.component.scss'
})
export class CategoryItemsComponent {
  @Input() label: string = '';
  @Input() count: number = 0;
  @Input() active: boolean = false;
}




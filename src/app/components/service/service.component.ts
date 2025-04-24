import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
@Input() icon: string = '';
@Input() title: string = '';
@Input() description: string = '';
@Input() linkText: string = '';
@Input() customClass: string = '';
}

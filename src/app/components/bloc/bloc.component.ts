import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bloc',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './bloc.component.html',
  styleUrl: './bloc.component.scss'
})
export class BlocComponent {
  @Input() subTitle: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
  @Input() buttonText2: string = '';
  @Input() buttonLink: string = '#';
  @Input() imageSrc: string = '';
  @Input() imagePosition: 'left' | 'right' = 'right';
}


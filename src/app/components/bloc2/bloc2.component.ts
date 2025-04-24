import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bloc2',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './bloc2.component.html',
  styleUrl: './bloc2.component.scss'
})
export class Bloc2Component {
  @Input() subTitle: string = '';
  @Input() title: string = '';
  @Input() secondT: string = '';
  @Input() description: string = '';
  @Input() buttonText: string = '';
  @Input() buttonLink: string = '#';
  @Input() imageSrc: string = '';
  @Input() imageSrc1: string = '';
  @Input() imageSrc2: string = '';
  @Input() imageSrc3: string = '';
  @Input() imagePosition: 'left' | 'right' = 'right';
  @Input() customClass: string = '';
  @Input() videoSrc: string = '';

}


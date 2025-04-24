import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-slider',
  standalone: true,
  imports: [
    NgFor,
  ],
  templateUrl: './team-slider.component.html',
  styleUrl: './team-slider.component.scss'
})
export class TeamSliderComponent {
  teamMembers = [
    {
      image: 'assets/slide0.png',
      name: 'Azah Anyeni',
      role: 'Designer'
    },
    {
      image: 'assets/slide1.png',
      name: 'Roelof Bekkenenks',
      role: 'React Developer'
    },
    {
      image: 'assets/slide2.png',
      name: 'Leonardo Oliveira',
      role: 'Illustrator'
    },
    {
      image: 'assets/slide3.png',
      name: 'Izabella Tabakova',
      role: 'Product Designer'
    }

  ];

}



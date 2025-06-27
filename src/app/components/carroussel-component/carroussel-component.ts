import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from '@models/Card';
import { CardComponent } from '../card-component/card-component';

@Component({
  selector: 'app-carroussel-component',
  imports: [CommonModule, CardComponent],
  templateUrl: './carroussel-component.html',
  styleUrl: './carroussel-component.scss',
})
export class CarrousselComponent {
  cards: Card[] = [
    {
      artist: 'VanGogh',
      date: new Date('1873-10-5'),
      description: "tableau ultra secret que personne n'est censé voir",
      title: 'Utra Secret Painting',
      image: '',
    },
  ];
}

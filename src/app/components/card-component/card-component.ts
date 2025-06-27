import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { Card } from '@models/Card';

@Component({
  selector: 'app-card-component',
  imports: [NgClass],
  templateUrl: './card-component.html',
  styleUrl: './card-component.scss',
})
export class CardComponent {
  card = input<Card>();
  isVertical = input<boolean>(true);
}

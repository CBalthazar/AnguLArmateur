import { Component } from '@angular/core';
import { CarrousselComponent } from '@components/carroussel-component/carroussel-component';

@Component({
  selector: 'app-home-page',
  imports: [CarrousselComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {}

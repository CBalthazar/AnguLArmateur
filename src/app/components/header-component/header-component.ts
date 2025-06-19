import { Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { routes } from '../../app.routes';
import { SearchInputComponent } from '../search-input-component/search-input-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink, SearchInputComponent, CommonModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  pages: Route[] = routes.filter((route) => route.data?.['inNavShow']);
}

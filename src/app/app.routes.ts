import { Routes } from '@angular/router';
import { HomePage } from '@pages/home-page/home-page';
import { ExplorationPage } from '@pages/exploration-page/exploration-page';
import { ItemPage } from '@pages/item-page/item-page';
import { SignPage } from '@pages/sign-page/sign-page';
import { AccountPage } from '@pages/account-page/account-page';
import { ResearchPage } from '@pages/research-page/research-page';
import { PageNotFound } from '@pages/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    data: { inNavShow: true },
    title: 'Home',
  },
  {
    path: 'explore',
    component: ExplorationPage,
    data: { inNavShow: true },
    title: 'Explore',
  },
  {
    path: 'item/:type/:id',
    component: ItemPage,
    data: { inNavShow: false },
    title: 'Item',
  },
  {
    path: 'signin',
    component: SignPage,
    data: { inNavShow: true },
    title: 'Sign In',
  },
  {
    path: 'account',
    component: AccountPage,
    data: { inNavShow: false },
    title: 'Account',
  },
  {
    path: 'search',
    component: ResearchPage,
    data: { inNavShow: false },
    title: 'Search',
  },
  {
    path: '**',
    component: PageNotFound,
    data: { inNavShow: false },
    title: 'Not Found',
  },
];

import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';
import {AuthGuard} from './_guards/auth.guard';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {TablesComponent} from './pages/tables/tables.component';
import {IconsComponent} from './pages/icons/icons.component';
import {MapsComponent} from './pages/maps/maps.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {CreateBookComponent} from './books/create-book/create-book.component';
import {ListBookComponent} from './books/list-book/list-book.component';
import {DetailsBookComponent} from './books/details-book/details-book.component';
import {ExchangeBookComponent} from './books/exchange-book/exchange-book.component';
import {CardExchangeBookComponent} from './books/card-exchange-book/card-exchange-book.component';
import {SendRequestComponent} from './books/send-request/send-request.component';
import {RequestListComponent} from './books/request-list/request-list.component';
import {ConfirmReceiveComponent} from './books/confirm-receive/confirm-receive.component';
import {CheckoutComponent} from './payement/checkout/checkout.component';
import {WriteChapterComponent} from './chapter/write-chapter/write-chapter.component';
import {CreateChapterComponent} from './stories/create-chapter/create-chapter.component';
import {ListChapterComponent} from './chapter/list-chapter/list-chapter.component';
import {ReadChapterComponent} from './chapter/read-chapter/read-chapter.component';
import {CreateStoryComponent} from './stories/create-story/create-story.component';
import {ListStoryComponent} from './stories/list-story/list-story.component';
import {ListChaptersStoryComponent} from './stories/list-chapters-story/list-chapters-story.component';
import {DetailsChapterComponent} from './stories/details-chapter/details-chapter.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list-book',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [

      { path: 'user-profile',   component: UserProfileComponent,  canActivate: [AuthGuard]},
      { path: 'tables',         component: TablesComponent,  canActivate: [AuthGuard] },
      { path: 'icons',          component: IconsComponent,  canActivate: [AuthGuard] },
      { path: 'maps',           component: MapsComponent,  canActivate: [AuthGuard] },
      { path: 'create-book',     component: CreateBookComponent,  canActivate: [AuthGuard] },
      {path: 'list-book', component: ListBookComponent, canActivate: [AuthGuard]},
      {path: 'details-book/:id', component: DetailsBookComponent, canActivate: [AuthGuard]},
      {path: 'exchange-book', component: ExchangeBookComponent, canActivate: [AuthGuard]},
      {path: 'my-exchanges', component: CardExchangeBookComponent, canActivate: [AuthGuard]},
      {path: 'request', component: SendRequestComponent, canActivate:[AuthGuard] },
      {path: 'request/:id', component: RequestListComponent, canActivate: [AuthGuard]},
      {path: 'confirm-exchange', component: ConfirmReceiveComponent, canActivate: [AuthGuard]},
      {path: 'story/create-chapter/:id', component: WriteChapterComponent, canActivate: [AuthGuard]},
      {path: 'create-chapter', component: CreateChapterComponent, canActivate: [AuthGuard]},
      {path: 'create-story', component: CreateStoryComponent, canActivate: [AuthGuard]},
      {path: 'story/chapters/:id', component: ListChaptersStoryComponent, canActivate: [AuthGuard]},
      {path: 'read-chapter/:id', component: ReadChapterComponent, canActivate: [AuthGuard]},
      {path: 'list-story', component: ListStoryComponent, canActivate: [AuthGuard]},
      {path: 'read-story', component: ListStoryComponent, canActivate: [AuthGuard]},
      {path: 'story/:idStory/chapter/:id', component: DetailsChapterComponent, canActivate: [AuthGuard]}
    ]
  }, {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login',          component: LoginComponent },
      { path: 'register',       component: RegisterComponent }
    ]
  },
  {path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard]},
  {
    path: '**',
    redirectTo: 'list-book'
  }
];


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {ToastrModule} from 'ngx-toastr';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {CommonModule, HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import {ErrorInterceptor} from './_guards/error.interceptor';
import {JwtInterceptor} from './_guards/jwt.interceptor';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {UserProfileComponent} from './pages/user-profile/user-profile.component';
import {TablesComponent} from './pages/tables/tables.component';
import {IconsComponent} from './pages/icons/icons.component';
import {MapsComponent} from './pages/maps/maps.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {ClipboardModule} from 'ngx-clipboard';
import {CreateBookComponent} from './books/create-book/create-book.component';
import {en_US, NgZorroAntdModule, NZ_I18N} from 'ng-zorro-antd';
import en from '@angular/common/locales/en';
import {ListBookComponent} from './books/list-book/list-book.component';
import {NzPaginationModule} from 'ng-zorro-antd/pagination';
import {DetailsBookComponent} from './books/details-book/details-book.component';
import {ExchangeBookComponent} from './books/exchange-book/exchange-book.component';
import {CardExchangeBookComponent} from './books/card-exchange-book/card-exchange-book.component';
import {SendRequestComponent} from './books/send-request/send-request.component';
import {RequestListComponent} from './books/request-list/request-list.component';
import {ConfirmReceiveComponent} from './books/confirm-receive/confirm-receive.component';
import {EnumToArrayPipe} from './pipes/enum-to-array.pipe';
import {CheckoutComponent} from './payement/checkout/checkout.component';
import {CreateChapterComponent} from './stories/create-chapter/create-chapter.component';
import {WriteChapterComponent} from './chapter/write-chapter/write-chapter.component';
import {CKEditorModule} from 'ng2-ckeditor';
import {ListChapterComponent} from './chapter/list-chapter/list-chapter.component';
import {ReadChapterComponent} from './chapter/read-chapter/read-chapter.component';
import {SharedModuleModule} from './_shared/shared-module/shared-module.module';
import { CreateStoryComponent } from './stories/create-story/create-story.component';
import { ListStoryComponent } from './stories/list-story/list-story.component';
import { ListChaptersStoryComponent } from './stories/list-chapters-story/list-chapters-story.component';
import { DetailsChapterComponent } from './stories/details-chapter/details-chapter.component';
import { KeepHtmlPipe } from './pipes/keep-html.pipe';



registerLocaleData(en);


@NgModule({
  imports: [
    SharedModuleModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    ClipboardModule,
    ToastrModule.forRoot(),
    NgZorroAntdModule,
    NzPaginationModule,
    CKEditorModule,
    FormsModule,

  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    LoginComponent,
    RegisterComponent,
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    EnumToArrayPipe,
    ListBookComponent,
    CheckoutComponent,
    CreateBookComponent,
    CreateChapterComponent,
    WriteChapterComponent,
    ListChapterComponent,
    ReadChapterComponent,
    DetailsBookComponent,
    ExchangeBookComponent,
    CardExchangeBookComponent,
    SendRequestComponent,
    RequestListComponent,
    ConfirmReceiveComponent,
    CreateStoryComponent,
    ListStoryComponent,
    ListChaptersStoryComponent,
    DetailsChapterComponent,
    KeepHtmlPipe
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: NZ_I18N, useValue: en_US},
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

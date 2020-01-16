import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ShoppingBagComponent} from '../payement/shopping-bag/shopping-bag.component';
import {EmptyShoppingBagComponent} from '../payement/empty-shopping-bag/empty-shopping-bag.component';
import {SharedModuleModule} from '../_shared/shared-module/shared-module.module';
import {NzMenuModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModuleModule,
    NzMenuModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ShoppingBagComponent,
    EmptyShoppingBagComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultImageBookPipe} from '../../pipes/default-image-book.pipe';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import {DefaultImageUserPipe} from '../../pipes/default-image-user.pipe';

@NgModule({
  declarations: [DefaultImageBookPipe,
    DefaultImageUserPipe

  ],
  imports: [
    NzMenuModule,
    CommonModule
  ],
  exports: [
    DefaultImageBookPipe,
    DefaultImageUserPipe

  ]
})
export class SharedModuleModule {
}

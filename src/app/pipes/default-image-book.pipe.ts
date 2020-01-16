import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'defaultImageBook'
})
export class DefaultImageBookPipe implements PipeTransform {
  defaultImagePath = '../../../assets/img/images/book-default.jpg';
  transform(value: any, args?: any): any {
     if (!value || !value.trim().length) {
       return this.defaultImagePath;
     }
    const path = value.split('\\');
     return '../../../assets/images/books/' + path[path.length - 1];

  }


}

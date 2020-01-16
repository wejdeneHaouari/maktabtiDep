import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'defaultImageUser'
})
export class DefaultImageUserPipe implements PipeTransform {

  defaultUserPath = '../../../assets/img/images/default_user.jpg';

  transform(value: any, args?: any): any {
    if (!value || !value.trim().length) {
      return this.defaultUserPath;
    }
    const path = value.split('\\');
    return '../../../assets/images/users/' + path[path.length - 1];

  }
}

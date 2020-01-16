import {Injectable} from '@angular/core';
import * as Noty from 'noty';

@Injectable({
  providedIn: 'root'
})
export class NotyService {

  constructor() {
  }

  displaySuccessNotification(action: string) {
    new Noty({
      theme: 'sunset',
      type: 'success',
      text: action + ' performed successfully',
      timeout: 10000
    }).show();
  }

  displayErrorNotification(action: string) {
    new Noty({
      theme: 'sunset',
      type: 'error',
      text: action + ' failed',
      timeout: 10000
    }).show();
  }

  displayForbiddenNotification(text: string) {
    new Noty({
      theme: 'sunset',
      type: 'error',
      text: text,
      timeout: 10000
    }).show();
  }


}

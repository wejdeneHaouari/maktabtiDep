import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SignInService} from '../_services/sign-in.service';

const TOKEN_HEADER_KEY = 'Authorization';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private signInService: SignInService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    const currentUser = this.signInService.currentUserValue;
    let authReq = request;
    const token = sessionStorage.getItem('token');
    if (token !== null) {
      authReq = request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)});
    }
    return next.handle(authReq);
  }
}

import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('request is on its way');
    return next.handle(req);
  }
}

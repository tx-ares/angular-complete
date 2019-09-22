import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler) {

    const modifiedRequest = req.clone({
        headers: req.headers.append('Auth', '123')
      });
    return next.handle(modifiedRequest);
  }
}

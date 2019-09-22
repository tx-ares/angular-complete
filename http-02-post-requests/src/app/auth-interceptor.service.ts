import { HttpInterceptor, HttpRequest, HttpHandler, HttpEventType } from '@angular/common/http';
import { tap } from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler) {

    const modifiedRequest = req.clone({
        headers: req.headers.append('Auth', '123')
      });
    return next.handle(modifiedRequest);
  }
}

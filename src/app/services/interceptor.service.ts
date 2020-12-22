import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// to set required headers for rest api
@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({ setHeaders:{}});
    return next.handle(req).pipe(tap((event: HttpEvent<any>) => {}
    , (err: any) => {}
     ));
  }

}

import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class AuthIntercetorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("Request is on its way");
    const modifiedReq = req.clone({
      headers: req.headers.append("Auth", "xyz"),
    });
    return next.handle(modifiedReq);

    // return next.handle(modifiedReq).pipe(
    //   tap((event) => {
    //     console.log(event);
    //     if (event.type === HttpEventType.Response) {
    //       console.log("Response arrived, body data: ", event.body);
    //     }
    //   })
    // );
  }
}

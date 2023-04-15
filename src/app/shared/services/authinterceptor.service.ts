import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


import { PersistenceService } from "./persistence.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private persistanceService: PersistenceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const request = req.clone({
            setHeaders: {
                Authorization: `Token ${this.persistanceService.getData('accesstoken')}`
            }
        });
        return next.handle(request);
    }
}
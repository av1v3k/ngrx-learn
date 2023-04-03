import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { currentUserI } from "src/app/shared/types/currentuser.interface";
import { registerUserI } from "../types/registerRequest.interface";
import { environment } from "src/environments/environment";
import { authresponseI } from "../types/authresponse.interface";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }


    register(data: registerUserI): Observable<currentUserI> {
        const url = environment.apiUrl + '/users';
        return this.http
            .post<authresponseI>(url, data)
            .pipe(
                tap(d => console.log(d)),
                map(data => data.user)
            );
    }
}
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

import { currentUserI } from "src/app/shared/types/currentuser.interface";
import { registerUserI } from "../types/registerRequest.interface";
import { environment } from "src/environments/environment";
import { authresponseI } from "../types/authresponse.interface";
import { loginUserI } from "../types/loginRequest.interface";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {
    }

    getUser(response: authresponseI): currentUserI {
        return response.user;
    }


    register(data: registerUserI): Observable<currentUserI> {
        const url = environment.apiUrl + '/users';
        return this.http
            .post<authresponseI>(url, data)
            .pipe(
                tap(rdata => console.log(rdata)),
                map(this.getUser)
            );
    }

    login(data: loginUserI): Observable<currentUserI> {
        const url = environment.apiUrl + '/users/login';
        return this.http
            .post<authresponseI>(url, data)
            .pipe(
                tap(rdata => console.log(rdata)),
                map(this.getUser)
            )
    }
}
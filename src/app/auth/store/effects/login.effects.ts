import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";


import { PersistenceService } from "src/app/shared/services/persistence.service";
import { currentUserI } from "src/app/shared/types/currentuser.interface";
import { AuthService } from "../../services/auth.service";
import { loginAction, loginActionFailure, loginActionSuccess } from "../actions/login.actions";

@Injectable()
export class LoginEffect {
    constructor(
        private action$: Actions, // Actions DO NOT MISS 's'
        private authservice: AuthService,
        private persistanceSerice: PersistenceService,
        private router: Router
    ) {

    }

    login$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(loginAction),
                switchMap(({ request }) => {
                    return this.authservice.login(request).pipe(
                        map((currentUser: currentUserI) => {
                            this.persistanceSerice.setData('accesstoken', currentUser.token);
                            return loginActionSuccess({ currentUser });
                        }),
                        catchError((errReponse: HttpErrorResponse) => {
                            return of(loginActionFailure({ errors: errReponse.error.errors }));
                        })
                    )
                })
            )
        }
    )

    redirectAfterSubmit = createEffect(
        () =>
            this.action$.pipe(
                ofType(loginActionSuccess),
                tap(() => {
                    console.log('1');
                    this.router.navigateByUrl('/');
                })
            ),
        { dispatch: false }
    )
}
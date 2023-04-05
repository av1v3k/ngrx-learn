import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";


import { PersistenceService } from "src/app/shared/services/persistence.service";
import { currentUserI } from "src/app/shared/types/currentuser.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerActionFailure, registerActionSuccess } from "../actions/register.actions";

@Injectable()
export class RegisterEffect {
    constructor(
        private action$: Actions, // Actions DO NOT MISS 's'
        private authservice: AuthService,
        private persistanceSerice: PersistenceService,
        private router: Router
    ) {

    }

    register$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(registerAction),
                switchMap(({ request }) => {
                    return this.authservice.register(request).pipe(
                        map((currentUser: currentUserI) => {
                            this.persistanceSerice.setData('accesstoken', currentUser.token);
                            return registerActionSuccess({ currentUser });
                        }),
                        catchError((errReponse: HttpErrorResponse) => {
                            return of(registerActionFailure({ errors: errReponse.error.errors }));
                        })
                    )
                })
            )
        }
    )

    redirectAfterSubmit = createEffect(
        () =>
            this.action$.pipe(
                ofType(registerActionSuccess),
                tap(() => {
                    console.log('1');
                    this.router.navigateByUrl('/');
                })
            ),
        { dispatch: false }
    )
}
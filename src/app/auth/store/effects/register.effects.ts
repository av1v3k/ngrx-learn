import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { currentUserI } from "src/app/shared/types/currentuser.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerActionFailure, registerActionSuccess } from "../actions/register.actions";

@Injectable()
export class RegisterEffect {
    constructor(
        private action$: Actions, // Actions DO NOT MISS 's'
        private authservice: AuthService
    ) {

    }

    register$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(registerAction),
                switchMap(({ request }) => {
                    return this.authservice.register(request).pipe(
                        map((currentUser: currentUserI) => {
                            return registerActionSuccess({ currentUser });
                        }),
                        catchError(() => {
                            return of(registerActionFailure())
                        })
                    )
                })
            )
        }
    )
}
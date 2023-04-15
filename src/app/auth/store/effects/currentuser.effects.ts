import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";


import { PersistenceService } from "src/app/shared/services/persistence.service";
import { currentUserI } from "src/app/shared/types/currentuser.interface";
import { AuthService } from "../../services/auth.service";
import { getcurrentUserAction, getcurrentUserFailureAction, getcurrentUserSuccessAction } from "../actions/currentuser.actions";

@Injectable()
export class GetCurrentUserEffect {
    constructor(
        private action$: Actions, // Actions DO NOT MISS 's'
        private authservice: AuthService,
        private persistanceSerice: PersistenceService,
        private router: Router
    ) {

    }

    currentUser$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(getcurrentUserAction),
                switchMap(() => {

                    const token = this.persistanceSerice.getData('accesstoken');

                    if (!token) {
                        return of(getcurrentUserFailureAction());
                    }

                    return this.authservice.getCurrentUser().pipe(
                        map((currentUser: currentUserI) => {
                            return getcurrentUserSuccessAction({ currentUser });
                        }),


                        catchError((errReponse: HttpErrorResponse) => {
                            return of(getcurrentUserFailureAction());
                        })
                    )
                })
            )
        }
    )
}
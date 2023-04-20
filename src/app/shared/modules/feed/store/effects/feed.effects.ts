import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";


import { FeedService } from "../../services/feed.service";
import { getFeedResponseI } from "../../types/getFeedResponse.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "../actions/getFeed.action";

@Injectable()
export class GetFeedEffect {
    constructor(
        private action$: Actions, // Actions DO NOT MISS 's'
        private feedSerice: FeedService,
    ) {

    }

    getFeed$ = createEffect(
        () => {
            return this.action$.pipe(
                ofType(getFeedAction),
                switchMap(({ url }) => {

                    return this.feedSerice.getFeed(url).pipe(
                        map((feed: getFeedResponseI) => {
                            return getFeedSuccessAction({ feed });
                        }),


                        catchError((errReponse: HttpErrorResponse) => {
                            return of(getFeedFailureAction());
                        })
                    )
                })
            )
        }
    )
}
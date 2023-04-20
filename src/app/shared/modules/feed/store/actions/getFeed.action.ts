import { createAction, props } from "@ngrx/store";


import { getFeedResponseI } from "../../types/getFeedResponse.interface";
import { ActionType } from "../actionTypes";

export const getFeedAction = createAction(
    ActionType.GET_FEED,
    props<{ url: string }>()
);
export const getFeedSuccessAction = createAction(
    ActionType.GET_FEED_SUCCESS,
    props<{ feed: getFeedResponseI }>()
)

export const getFeedFailureAction = createAction(
    ActionType.GET_FEED_FAILURE,
)

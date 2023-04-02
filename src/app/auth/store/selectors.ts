import { createFeatureSelector, createSelector } from "@ngrx/store";
import { appStateI } from "src/app/shared/types/appstate.interface";
import { authstateI } from "../types/authstate.interface";

export const authFeatureSelector = (state: appStateI) => state.auth; // use either this one or below one
// export const authFeatureSelector = createFeatureSelector<appStateI, authstateI>('auth');

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (state: authstateI) => state.isSubmitting
);
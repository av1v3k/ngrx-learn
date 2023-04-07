import { createReducer, on } from "@ngrx/store";

import { authstateI } from "../types/authstate.interface";
import { loginAction, loginActionFailure, loginActionSuccess } from "./actions/login.actions";
import { registerAction, registerActionFailure, registerActionSuccess } from "./actions/register.actions";

const initialState: authstateI = {
    isSubmitting: false,
    currentUser: null,
    isLoggedin: null,
    validationerrors: null
}
export const authReducer = createReducer(
    initialState,
    on(registerAction, (state: authstateI) => (
        {
            ...state,
            isSubmitting: true,
            validationerrors: null,
            isLoggedin: null,
            currentUser: null
        }
    )),
    on(registerActionSuccess, (state, action): authstateI => {
        return (
            {
                ...state,
                isSubmitting: false,
                isLoggedin: true,
                currentUser: action.currentUser,
                validationerrors: null
            }
        )
    }),
    on(registerActionFailure, (state, action): authstateI => {
        return ({
            ...state,
            isSubmitting: false,
            isLoggedin: false,
            currentUser: null,
            validationerrors: action.errors
        })
    }),
    on(loginAction, (state: authstateI) => (
        {
            ...state,
            isSubmitting: true,
            validationerrors: null,
            isLoggedin: null,
            currentUser: null
        }
    )),
    on(loginActionSuccess, (state, action): authstateI => {
        return (
            {
                ...state,
                isSubmitting: false,
                isLoggedin: true,
                currentUser: action.currentUser,
                validationerrors: null
            }
        )
    }),
    on(loginActionFailure, (state, action): authstateI => {
        return ({
            ...state,
            isSubmitting: false,
            isLoggedin: false,
            currentUser: null,
            validationerrors: action.errors
        })
    }),
);
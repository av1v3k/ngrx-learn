import { createReducer, on } from "@ngrx/store";
import { authstateI } from "../types/authstate.interface";
import { registerAction } from "./actions/register.actions";

const initialState: authstateI = {
    isSubmitting: false
}
export const authReducer = createReducer(
    initialState,
    on(registerAction, (state: authstateI) => (
        {
            ...state,
            isSubmitting: true
        }
    ))
);
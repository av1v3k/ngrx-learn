import { backenderrorobjI } from "src/app/shared/types/backenderrors.interface";
import { currentUserI } from "src/app/shared/types/currentuser.interface";

export interface authstateI {
    isSubmitting: boolean,
    currentUser: currentUserI | null,
    isLoggedin: boolean | null,
    validationerrors: backenderrorobjI | null
}
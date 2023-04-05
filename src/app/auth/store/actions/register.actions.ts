import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../actionTypes';
import { registerUserI } from 'src/app/auth/types/registerRequest.interface';
import { currentUserI } from 'src/app/shared/types/currentuser.interface';
import { backenderrorobjI } from 'src/app/shared/types/backenderrors.interface';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{ request: registerUserI }>()
);

export const registerActionSuccess = createAction(
    ActionTypes.REGISTER_SUCCESS,
    props<{ currentUser: currentUserI }>()
);

export const registerActionFailure = createAction(
    ActionTypes.REGISTER_FAILURE,
    props<{ errors: backenderrorobjI }>()
);
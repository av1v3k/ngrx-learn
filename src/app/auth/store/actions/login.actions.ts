import { createAction, props } from '@ngrx/store';


import { ActionTypes } from '../actionTypes';
import { currentUserI } from 'src/app/shared/types/currentuser.interface';
import { backenderrorobjI } from 'src/app/shared/types/backenderrors.interface';
import { loginUserI } from '../../types/loginRequest.interface';

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{ request: loginUserI }>()
);

export const loginActionSuccess = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{ currentUser: currentUserI }>()
);

export const loginActionFailure = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{ errors: backenderrorobjI }>()
);
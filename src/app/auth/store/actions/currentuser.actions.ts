import { createAction, props } from '@ngrx/store';


import { ActionTypes } from '../actionTypes';
import { currentUserI } from 'src/app/shared/types/currentuser.interface';

export const getcurrentUserAction = createAction(
    ActionTypes.GETCURRENTUSER,
);

export const getcurrentUserSuccessAction = createAction(
    ActionTypes.GETCURRENTUSER_SUCCESS,
    props<{ currentUser: currentUserI }>()
);

export const getcurrentUserFailureAction = createAction(
    ActionTypes.GETCURRENTUSER_FAILURE,
);
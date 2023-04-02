import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';
import { registerUserI } from 'src/app/auth/types/registerRequest.interface';

export const registerAction = createAction(
    ActionTypes.REGISTER,
    props<{ request: registerUserI }>()
);
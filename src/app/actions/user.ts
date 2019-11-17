import { createAction } from 'redux-actions';
import { IUserActionChangeName } from '../models/User';

export enum IUserActionsType {
  CHANGE_NAME = 'CHANGE_NAME',
  EDIT_DATA = 'EDIT_DATA'
}

export const handleUserNameChange = createAction<IUserActionChangeName>(
  IUserActionsType.CHANGE_NAME
);

export const handleUserDataEdit = createAction<IUserActionChangeName>(
  IUserActionsType.EDIT_DATA
);

export const userActionCreators = {
  handleUserNameChange,
  handleUserDataEdit
};

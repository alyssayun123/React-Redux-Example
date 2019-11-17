import { handleActions } from 'redux-actions';
import { IUserActionsType } from '../actions/user';
import {
  IUserState,
  IUserActionChangeName,
  IUserActionEditData
} from '../models/User';

const init: () => IUserState = () => {
  return {
    id: '1',
    name: 'Quincy',
    email: '',
    password: ''
  };
};

export const userReducer = handleActions(
  {
    [IUserActionsType.CHANGE_NAME]: (state, action: any) => {
      if (action.payload as IUserActionChangeName) {
        const { name } = action.payload;
        const newState = {
          ...state,
          name
        };
        return newState;
      }
      return state;
    },
    [IUserActionsType.EDIT_DATA]: (state, action: any) => {
      if (action.payload as IUserActionEditData) {
        const newState = {
          ...state,
          ...action.payload
        };
        return newState;
      }
      return state;
    }
  },
  init()
);

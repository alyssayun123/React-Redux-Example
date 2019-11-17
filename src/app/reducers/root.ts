import { combineReducers } from 'redux';
import { IRootState } from '../models/root';
import { userReducer } from './user';

export const rootReducer = combineReducers<IRootState>({
  user: userReducer as any
});

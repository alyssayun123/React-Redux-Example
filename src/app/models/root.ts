import { IUserState } from './user';

export interface IRootState {
  user: IUserState;
  router?: any;
}

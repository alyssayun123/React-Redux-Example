export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IUserState extends IUser {}

export interface IUserActionChangeName {
  name: string;
}

export interface IUserActionEditData extends Partial<Omit<IUser, 'id'>> {}

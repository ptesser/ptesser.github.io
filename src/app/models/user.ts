export const SexEnum = {
  Male: 0,
  Female: 1,
};
export type SexEnum = (typeof SexEnum)[keyof typeof SexEnum];

export interface IUser {
  username: string;
  email: string;
  sex: SexEnum;
  country?: string;
}

export class User implements IUser {
  constructor(
    public username: string = null,
    public email: string = null,
    public sex: SexEnum = null,
    public country?: string,
  ) {
  }
}

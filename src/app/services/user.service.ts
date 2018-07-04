import { Injectable } from '@angular/core';
import { IUser } from '../models/user';

@Injectable()
export class UserService {

  constructor() {
  }

  signup(user: IUser) {
    console.log(user);
  }

}

import { Injectable } from '@angular/core';
import {User} from "../entites/user";
import {Users} from "../datas/users";
import * as _ from 'underscore';

@Injectable()
export class UsersService {
  users: User[];
  constructor() {
      this.users = Users.USERS;
  }

  public getUsers(): User[]{
    return this.users;
  };

  public getUserById(id: string): User {

    return _.filter( Users.USERS, function (u) {
      return u.id === id;
    })[0];

  }

}

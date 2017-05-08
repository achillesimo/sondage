import { Component, OnInit } from '@angular/core';
import {User} from "../../entites/user";
import * as _ from 'underscore';
import {Users} from "../../datas/users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title:string = "participants";
  users:User[];
  constructor() { }

  ngOnInit() {
    this.users = Users.USERS;
  }

  public updateUser(user): void {

    _.map(
        _.filter(this.users, function (u) {
            return u.id === user.id;
        }),
        function (ur) {
          return ur.active = !ur.active;
        }
    );

  }

}

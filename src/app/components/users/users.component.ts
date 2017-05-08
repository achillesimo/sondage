import { Component, OnInit } from '@angular/core';
import {User} from "../../entites/user";
import * as _ from 'underscore';
import {Users} from "../../datas/users";
import {UsersService} from "../../services/users.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService, UserService]
})
export class UsersComponent implements OnInit {
  title:string = "participants";
  users:User[];
  constructor(private usersService: UsersService, private userService: UserService) { }

  ngOnInit() {
    //this.users = this.usersService.getUsers();
    this.userService.getUsers().subscribe(
      res => {
        this.users = res;
      },
      error => {
          console.log(error)
      }
     );
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

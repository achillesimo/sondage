import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import {User} from "../../../entites/user";
import {Users} from "../../../datas/users";
import * as _ from 'underscore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: string;
  user: User;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.user = _.filter( Users.USERS, function (u) {
      return u.id === id;
    })[0];
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import {User} from "../../../entites/user";
import {UsersService} from "../../../services/users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService]
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.user = this.usersService.getUserById(id);
  }
}

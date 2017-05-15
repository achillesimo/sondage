import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import {User} from "../../../entites/user";
import {UsersService} from "../../../services/users.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService, UserService]
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private route: ActivatedRoute, private usersService: UsersService, private us: UserService) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.us.getUser(id).subscribe(data => {
      this.user = data;
    });
  }
}

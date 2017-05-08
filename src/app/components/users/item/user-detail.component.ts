import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {User} from "../../../entites/user";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input()
  user:User;

  /*
  @Output()
  updateStatus: EventEmitter<User> = new  EventEmitter();
  */

  constructor() { }
  ngOnInit() {}

  public toggleUser(user): void {
   //this.updateStatus.emit(user)
  }
}

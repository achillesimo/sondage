import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {User} from "../entites/user";
@Injectable()
export class UserService {

  baseUrl: string = "http://localhost:3000";
  constructor(private http: Http) { }

  public getUsers(): Observable<User[]>{
     return this.http
                .get(this.baseUrl +'/users')
                .map(response => response.json());
  }

}

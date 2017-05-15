import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Vote} from "../entites/vote";

@Injectable()
export class VotesService {

  baseUrl: string = "http://localhost:3000";
  constructor(private http: Http) { }

  public saveVote(vote: Vote): Observable<Vote>{
    return this.http
      .post(this.baseUrl +'/votes', vote)
      .map(response =>response.json());
  }


  public getVotes(): Observable<Vote[]>{
    return this.http
      .get(this.baseUrl +'/votes')
      .map(response => response.json());
  }


}

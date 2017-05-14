import { Injectable } from '@angular/core';

@Injectable()
export class VotesService {

  baseUrl: string = "http://localhost:3000";
  constructor(private http: Http) { }

  public saveVote(vote: Vote): Observable<Vote>{
    return this.http
      .get(this.baseUrl +'/votes')
      .map(response => {
          console.log (response.json())
      });
  }

}

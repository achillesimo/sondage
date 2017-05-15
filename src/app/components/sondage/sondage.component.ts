import { Component, OnInit } from '@angular/core';
import {VoteForm} from "../../helpers/vote.form";
import {FormGroup} from "@angular/forms";
import {Vote} from "../../entites/vote";
import {Router} from "@angular/router";
import {VotesService} from "../../services/votes.service";
import {UserService} from "../../services/user.service";
import * as _ from 'underscore';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css'],
  providers: [VoteForm, VotesService, UserService]
})
export class SondageComponent implements OnInit {

  title: string = "Merci de participer au sondage";
  vote: FormGroup;
  saved: boolean = false;
  constructor(private vf: VoteForm, private router: Router, private vs: VotesService, private us: UserService) { }

  ngOnInit() {
    this.vote = this.vf.buildForm();

    this.vote.patchValue({
      satisfaction: 50,
      user: {
        active: true,
        civ:  _.random(1, 2)
      }
    })
  }

  public saveVote({ value, valid }: { value: Vote, valid: boolean }): void {
     //console.log(value,  valid, this.vote.value,  this.vote.valid);
    this.vs.saveVote(this.vote.value).subscribe(data => this.saveUser(data));
  }

  private saveUser(data){
    this.us.saveUser(data.user).subscribe(data => {});

    this.router.navigate(['/dashboard']);
  }
}



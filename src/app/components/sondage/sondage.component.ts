import { Component, OnInit } from '@angular/core';
import {VoteForm} from "../../helpers/vote.form";
import {FormGroup} from "@angular/forms";
import {Vote} from "../../entites/vote";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css'],
  providers: [VoteForm]
})
export class SondageComponent implements OnInit {

  title: string = "Merci de participer au sondage";
  vote: FormGroup;

  constructor(private vf: VoteForm, private router: Router) { }

  ngOnInit() {
    this.vote = this.vf.buildForm();
    this.vote.patchValue({
      satisfaction: 50
    })
  }

  public saveVote({ value, valid }: { value: Vote, valid: boolean }): void {
     console.log(value,  valid, this.vote.value,  this.vote.valid);

    this.router.navigate(['/dashboard']);
  }

}



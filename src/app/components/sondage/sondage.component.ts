import { Component, OnInit } from '@angular/core';
import {VoteForm} from "../../helpers/vote.form";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css'],
  providers: [VoteForm]
})
export class SondageComponent implements OnInit {

  title:string = "Merci de participer au sondage";
  vote: FormGroup;

  constructor(private vf: VoteForm) { }

  ngOnInit() {
    this.vote = this.vf.buildForm();
  }

}

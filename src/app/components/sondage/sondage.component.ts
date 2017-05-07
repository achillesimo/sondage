import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {
  title:string = "Merci de participer au sondage";
  email:string = "le@mail.com";
  constructor() { }

  ngOnInit() {
  }

}

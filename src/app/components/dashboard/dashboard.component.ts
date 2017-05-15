import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title: string = "Bonjour";
  sTitle: string = "Merci de participer au sondage";
  constructor() { }

  ngOnInit() {
  }

}

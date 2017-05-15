import { Component, OnInit } from '@angular/core';
import {Chart} from "../../entites/chart";
import {UserService} from "../../services/user.service";
import * as _ from 'underscore';

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css'],
  providers: [UserService]
})
export class DoughnutComponent implements OnInit {
  chart: Chart;
  datas: number[];

  constructor(private us: UserService) { }

  ngOnInit() {
    this.chart = new Chart();
    this.chart.labels = ['Informaticien', 'Commercial(e)', 'ARH', 'Autres'];
    this.chart.data = [350, 450, 100, 300];
    this.chart.type = 'pie';
    this.chart.options = {'legend': {'position': 'bottom', 'labels': { 'fontColor': 'rgb(255, 255, 255)' }}};
    this.initChartData();
  }

  public refreshColors(e:any): void {
    let color = this.getRandomColor();
    this.chart.options = {'legend': {'position': 'bottom', 'labels': { 'fontColor': color }}};;
  }

  private getRandomColor(): string {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  private initChartData(): void {
    this.us.getUsers().subscribe(users => {
      let participants: number [] = [0, 0, 0, 0];
      participants[0] = _.size(_.filter(users, function(user){ return +user.job === 1; }));
      participants[1] =  _.size(_.filter(users, function(user){ return +user.job === 2; }));
      participants[2] =  _.size(_.filter(users, function(user){ return +user.job === 3; }));
      participants[3] = _.size(_.filter(users, function(user){ return +user.job === 4; }));
      this.chart.data = participants;

    });
  }
}

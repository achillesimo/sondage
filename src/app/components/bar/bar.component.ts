import { Component, OnInit } from '@angular/core';
import {Chart} from "../../entites/chart";
import * as _ from 'underscore';
import {VotesService} from "../../services/votes.service";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  providers:[VotesService]
})
export class BarComponent implements OnInit {

  chart: Chart;

  constructor(private vs: VotesService) { }

  ngOnInit() {
    this.chart = new Chart();
    this.chart.labels = ['Pas S.', 'Peu S.', 'S.',  'A. S','Très S.'];
    this.chart.data = [
        {
          data: [10, 100, 80, 30, 12],
          label: 'Satisfaction globale',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ]
        }
    ];
    this.chart.type = 'bar';
    this.chart.options = {
      'legend': {'position': 'bottom', 'labels': { 'fontColor': 'rgb(255, 255, 255)' }},
      'options': {
        scales: {
          yAxes: [{
            display: false
          }]
        },
        legend: {
          display: false,
          labels: {
            fontColor: 'rgb(255, 99, 132)'
          }
        }
      }
    };

    this.initChartData();
  }

  private initChartData(): void {
    this.vs.getVotes().subscribe(votes => {
      let satisfactions: number [] = [0, 0, 0, 0];
      satisfactions[0] = _.size(_.filter(votes, function(vote){ return +vote.satisfaction === 0; }));
      satisfactions[1] =  _.size(_.filter(votes, function(vote){ return +vote.satisfaction === 25; }));
      satisfactions[2] =  _.size(_.filter(votes, function(vote){ return +vote.satisfaction === 50; }));
      satisfactions[3] = _.size(_.filter(votes, function(vote){ return +vote.satisfaction === 75; }));
      satisfactions[4] = _.size(_.filter(votes, function(vote){ return +vote.satisfaction === 100; }));

      let data = {
        data: satisfactions,
        label: 'Satisfaction globale',
        backgroundColor: [
          'rgba(255, 0, 0, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)'
        ],
        borderWidth: 1
      };
      this.chart.data = [data];

    });
  }
}


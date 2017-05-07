import { Component, OnInit } from '@angular/core';
import {Chart} from "../../entites/chart";

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  chart: Chart;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart();
    this.chart.labels = ['Pas S.', 'Peu S.', 'S.', 'Très S.'];
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
    this.chart.options = {'legend': {'position': 'bottom', 'labels': { 'fontColor': 'rgb(255, 255, 255)' }}};
  }
}

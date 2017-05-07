import { Component, OnInit } from '@angular/core';
import {Chart} from "../../entites/chart";

@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.css']
})
export class DoughnutComponent implements OnInit {
  chart: Chart;

  constructor() { }

  ngOnInit() {
    this.chart = new Chart();
    this.chart.labels = ['Informaticien', 'Commercial(e)', 'ARH', 'Autres'];
    this.chart.data = [350, 450, 100, 300];
    this.chart.type = 'pie';
    this.chart.options = {'legend': {'position': 'bottom', 'labels': { 'fontColor': 'rgb(255, 255, 255)' }}};
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
}

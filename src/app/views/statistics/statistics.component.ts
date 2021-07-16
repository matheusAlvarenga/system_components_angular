import { Component, Input, OnInit } from '@angular/core';

interface IData {
  value: number | string;
  label: string;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() data:IData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

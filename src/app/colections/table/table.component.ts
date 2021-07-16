import { Component, Input, OnInit } from '@angular/core';

interface IData {
  [index: string]: string | number | boolean;
}

interface IHeaders {
    key: string;
    label: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() data:IData[] = [];
  @Input() headers:IHeaders[] = [];
  @Input() classNames:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

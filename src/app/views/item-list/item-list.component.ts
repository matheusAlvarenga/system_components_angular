import { Component, Input, OnInit } from '@angular/core';

interface IData {
  picture: string;
  header: string;
  description: string;
}

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  @Input() data: IData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

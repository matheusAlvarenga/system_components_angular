import { Component, Input, OnInit } from '@angular/core';

interface IData {
  title: string;
  content: string;
}

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  selectedItem:number = 0;
  @Input() data:IData[] = []

  constructor() { }

  ngOnInit(): void {
  }

  selectItem(item: number) {
    this.selectedItem = item;
  }

}

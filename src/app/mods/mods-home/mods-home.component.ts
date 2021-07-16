import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {

  modalOpen = false;

  items = [
    {title: "Question 1", content: "Answer 1"},
    {title: "Question 2", content: "Answer 2"},
    {title: "Question 3", content: "Answer 3"},
    {title: "Question 4", content: "Answer 4"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.modalOpen = !this.modalOpen;
  }

}

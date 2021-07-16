import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    {value: 900, label: '# of users'},
    {value: 159, label: '# of products'},
    {value: 55, label: '# of reviews'},
  ]

  items = [
    {picture: "/assets/images/couch.jpeg", header: "Couch", description: "This is a fantastic couch to sit on"},
    {picture: "/assets/images/dresser.jpeg", header: "Dresser", description: "This is a fantastic dresser to stuff in"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

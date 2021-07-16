import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colections-home',
  templateUrl: './colections-home.component.html',
  styleUrls: ['./colections-home.component.css']
})
export class ColectionsHomeComponent implements OnInit {

  data = [
    {name: "James", age: 24, job: "Designer", isAlive: true},
    {name: "Jill", age: 26, job: "WebDev", isAlive: false},
    {name: "Elise", age: 34, job: "WebDesigner", isAlive: true},
  ]
  headers = [
    {key: 'name', label: "Name"},
    {key: 'age', label: "Age"},
    {key: 'job', label: "Job"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

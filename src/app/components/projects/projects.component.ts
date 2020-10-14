import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }
  slides = [
    {'image': 'assets/code2.png'},
    {'image': 'assets/garethAvatar.png'},
    {'image': 'assets/github.svg'},
    {'image': 'assets/code.png'},
    {'image': 'assets/linkedin.svg'}
  ];


  ngOnInit(): void {
  }
}

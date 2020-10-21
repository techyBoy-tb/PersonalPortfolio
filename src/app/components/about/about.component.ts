import { Component, OnInit } from '@angular/core';
import { SKILLS_LIST } from 'src/app/model/enum/skill-list.enum';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  skillList: Array<Object> = SKILLS_LIST;

  ngOnInit(): void {
  }

}

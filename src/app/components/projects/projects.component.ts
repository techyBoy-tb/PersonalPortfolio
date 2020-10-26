import { Component } from '@angular/core';
import { SKILLS_LIST } from 'src/app/model/enum/skill-list.enum';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  constructor() { }

  skillList: Array<Object> = SKILLS_LIST;
  taxCalcImages = [
    {
      name: 'Image one',
      source: '../../../assets/taxCalc/deductionDonut.png'
    },
    {
      name: 'Image two',
      source: '../../../assets/taxCalc/deductionBreakdown.png'
    },
    {
      name: 'Image three',
      source: '../../../assets/taxCalc/student.png'
    },
    {
      name: 'Image Four',
      source: '../../../assets/taxCalc/oldStudent.png'
    }
  ];
  codeImages = [
    {
      name: 'Image one',
      source: '../../../assets/code.png'
    },
    {
      name: 'Image two',
      source: '../../../assets/code2.png'
    },
  ];
}

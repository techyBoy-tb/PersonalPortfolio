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
  siteImages = [
    {
      name: 'Image one',
      source: '../../../assets/portfolio/about.png'
    },
    {
      name: 'Image two',
      source: '../../../assets/portfolio/projects.png'
    },
    {
      name: 'Image three',
      source: '../../../assets/portfolio/social.png'
    },
    {
      name: 'Image four',
      source: '../../../assets/portfolio/home.png'
    },
    {
      name: 'Image five',
      source: '../../../assets/portfolio/contact.png'
    },
    {
      name: 'Image six',
      source: '../../../assets/portfolio/contact2.png'
    },
    {
      name: 'Image seven',
      source: '../../../assets/portfolio/contact3.png'
    },
  ];

  jonoImages = [
    {
      name: 'Image one',
      source: '../../../assets/jono/jonoBio.png'
    },
    {
      name: 'Image two',
      source: '../../../assets/jono/jonoBooks.png'
    },
    {
      name: 'Image three',
      source: '../../../assets/jono/jonoSocial.png'
    },
  ];

  eformsImages = [
    {
      name: 'Coming soon',
      source: '../../../assets/comingSoon.jpg'
    }
  ];
}

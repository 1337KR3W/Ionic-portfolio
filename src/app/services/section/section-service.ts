import { Injectable } from '@angular/core';
import { SectionCard } from 'src/app/models/card/section-card/section-card.model';

@Injectable({
  providedIn: 'root',
})
export class SectionService {


  private readonly sections: SectionCard[] = [

    {
      id: 1,
      title: 'Skills',
      description: 'During my studies and internships, I have developed the following technical skills:'
    },
    {
      id: 2,
      title: 'Projects',
      description: 'Heres a small list with my projects:'
    },
    {
      id: 3,
      title: 'Work experience',
      description: 'A summary of my professional trajectory and the impact I’ve made at different companies:'
    },
    {
      id: 4,
      title: 'Certifications & Education',
      description: 'A record of my academic background and specialized technical certifications:'
    },
  ];

  getSections(): SectionCard[] {
    return this.sections;
  }

}

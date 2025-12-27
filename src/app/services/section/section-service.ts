import { Injectable } from '@angular/core';
import { SectionCard } from 'src/app/models/card/section-card/section-card.model';

@Injectable({
  providedIn: 'root',
})
export class SectionService {


  private readonly sections: SectionCard[] = [

    {
      id: 1,
      title: 'About me',
      description: 'A little bit about me, my mission, and my technical approach:'
    },
    {
      id: 2,
      title: 'Skills',
      description: 'During my studies and internships, I have developed the following technical skills:'
    },
    {
      id: 3,
      title: 'Projects',
      description: 'Heres a small list with my projects:'
    },
    {
      id: 4,
      title: 'Work experience',
      description: 'A summary of my professional trajectory and the impact I’ve made at different companies:'
    },
    {
      id: 5,
      title: 'Certifications & Education',
      description: 'A record of my academic background and specialized technical certifications:'
    },
    {
      id: 6,
      title: 'GitHub activity',
      description: 'A real-time visualization of my daily contributions and coding activity on GitHub:'
    },
  ];

  getSections(): SectionCard[] {
    return this.sections;
  }

}

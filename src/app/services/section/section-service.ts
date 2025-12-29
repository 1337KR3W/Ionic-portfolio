import { Injectable } from '@angular/core';
import { SectionCard } from 'src/app/models/card/section-card/section-card.model';

@Injectable({
  providedIn: 'root',
})
export class SectionService {


  private readonly sections: SectionCard[] = [
    {
      id: 0,
      title: 'Pepe',
      description: 'Software Engineer',
    },
    {
      id: 1,
      title: 'About Me',
      description: 'Un poco sobre mí',
      extraData: {
        fullName: 'Jose Joaquin (Pepe) Rojas Romero',
        jobTitle: 'Junior FullStack Developer',
        avatarUrl: './assets/avatar.gif',
        bio: 'Graduated in Software Engineering at the University of Seville (US) at the Higher Technical School of Computer Engineering (ETSII). I have liked computers since I was a child and I am currently professionally dedicated to it, particularly the development of hybrid solutions for mobile phones. I enjoy my free time making music, hosting dedicated servers of some video games and always learning something new.',
        skills: {
          languages: 'Java, Python, TypeScript, SQL, CSS, HTML',
          frameworks: 'Angular, Ionic, Spring Boot, Django, Node.js, Tailwind',
          softSkills: 'Teamwork, Problem Solving, Adaptability',
          tools: 'VS Code, Eclipse, Jira, Git, Docker, Capacitor, Postman, Windows, Linux, VirtualBox, DBeaver'
        },
        education: {
          university: 'University of Seville',
          degree: 'Software Engineering',
          languages: 'Spanish (Native), English (B2)'
        }
      }
    },
    {
      id: 2,
      title: 'Skills',
      description: 'Tecnologías y herramientas con las que trabajo',
      extraData: {
        technicalSkills: [
          { id: 1, name: 'Angular', image: './assets/skills/angular.webp' },
          { id: 2, name: 'TypeScript', image: './assets/skills/typescript.webp' },
          { id: 3, name: 'Ionic', image: './assets/skills/ionic.webp' },
          { id: 4, name: 'Capacitor', image: './assets/skills/capacitor.webp' },
          { id: 5, name: 'Spring Boot', image: './assets/skills/springboot.webp' },
          { id: 6, name: 'Java', image: './assets/skills/java.webp' },
          { id: 7, name: 'Docker', image: './assets/skills/docker.webp' },
          { id: 8, name: 'MySQL', image: './assets/skills/mysql.webp' },
          { id: 9, name: 'Python', image: './assets/skills/python.webp' }
        ]
      }
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

  getHeroData() {
    return this.sections.find(s => s.id === 0)!;
  }

}

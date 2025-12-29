import { Injectable } from '@angular/core';
import { SectionCard } from 'src/app/models/section-card/section-card.model';

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
      description: 'A little about me:',
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
      description: 'Technical skills that I have developed during my studies:',
      extraData: {
        technicalSkills: [
          { id: 1, name: 'Angular', image: './assets/image/skills/angular.webp' },
          { id: 2, name: 'TypeScript', image: './assets/image/skills/typescript.webp' },
          { id: 3, name: 'Ionic', image: './assets/image/skills/ionic.webp' },
          { id: 4, name: 'Capacitor', image: './assets/image/skills/capacitor.webp' },
          { id: 5, name: 'Spring Boot', image: './assets/image/skills/springboot.webp' },
          { id: 6, name: 'Java', image: './assets/image/skills/java.webp' },
          { id: 7, name: 'Docker', image: './assets/image/skills/docker.webp' },
          { id: 8, name: 'MySQL', image: './assets/image/skills/mysql.webp' },
          { id: 9, name: 'Python', image: './assets/image/skills/python.webp' }
        ]
      }
    },
    {
      id: 3,
      title: 'Projects',
      description: 'Heres a small list with my projects:',
      extraData: {
        projects: [
          {
            id: 1,
            title: 'Acme Platform',
            subtitle: 'Java, Maven, Spring Boot',
            description: 'A platform for students and teachers.',
            imgUrl: './assets/image/skills/springboot.webp',
            gitUrl: 'https://github.com/1337KR3W/DP2-G27-Acme'
          },
          {
            id: 2,
            title: 'Virtual Knowledge',
            subtitle: 'Angular, Material Design',
            description: 'Virtual Knowledge is a web app that uses ReqRes public API for managing user data using Angular and Material Design.',
            imgUrl: './assets/image/projects/virtual-knowledge.png',
            gitUrl: 'https://github.com/1337KR3W/Virtualknowledge-Frontend'
          },
          {
            id: 3,
            title: 'getyt',
            subtitle: 'Python, PyTube, Tkinter',
            description: 'YouTube streams tool.',
            imgUrl: './assets/image/projects/getyt.png',
            gitUrl: 'https://github.com/1337KR3W/getyt'
          },
          {
            id: 4,
            title: 'Tkinter timer',
            subtitle: 'Python, Tkinter',
            description: 'Timer using Tkinter.',
            imgUrl: './assets/image/projects/tkinter-timer.png',
            gitUrl: 'https://github.com/1337KR3W/pyside6_timer'
          },
          {
            id: 5,
            title: 'PySide6 timer',
            subtitle: 'Python, PySide6',
            description: 'Timer using PySide6.',
            imgUrl: './assets/image/projects/pyside6-timer.png',
            gitUrl: 'https://github.com/1337KR3W/DP2-G27-Acme'
          },
          {
            id: 6,
            title: 'Flet timer',
            subtitle: 'Python, Flet',
            description: 'Simple timer using Flet.',
            imgUrl: './assets/image/projects/flet-timer.png',
            gitUrl: 'https://github.com/1337KR3W/flet_timer'
          },
          {
            id: 7,
            title: 'Netscanner',
            subtitle: 'Bash, Arp, Python',
            description: 'Netscanner is a tool that uses arp packets to discover connected hosts to a private network.',
            imgUrl: './assets/image/projects/netscanner.png',
            gitUrl: 'https://github.com/1337KR3W/netscanner'
          },
          {
            id: 8,
            title: 'Pynotech',
            subtitle: 'Python, PySide6',
            description: 'Pynotech a notepad developed using PySide6 in my Bachelors Thesis (TFG).',
            imgUrl: './assets/image/projects/pynotech.png',
            gitUrl: 'https://github.com/1337KR3W/pyNotech'
          },
        ]
      }
    },
    {
      id: 4,
      title: 'Work experience',
      description: 'A summary of my professional trajectory and the impact I’ve made at different companies:',
      extraData: {
        workExperience: [
          {
            id: 1,
            title: 'Internship as Junior FullStack developer at Insinno España S.L.',
            description: 'Focused on mastering Full Stack development by building responsive frontends and robust backend logic during my internship at Insinno España S.L.',
            dateRange: '2025/09/29 - 2026/03/28',
            imgUrl: './assets/image/works/insinno.png',
            linkUrl: 'https://www.linkedin.com/in/josejoaquinsoftware/'
          },
        ]
      }
    },
    {
      id: 5,
      title: 'Certifications & Education',
      description: 'A record of my academic background and specialized technical certifications:',
      extraData: {
        certifications: [
          {
            id: 1,
            title: 'Testing with JUnit, Mockito and Spring Boot',
            subtitle: 'Avante',
            dateRange: '2025/10/20 - 2025/10/24',
            time: '25 hours',
            linkUrl: 'https://www.linkedin.com/in/josejoaquinsoftware/'
          },
          {
            id: 2,
            title: 'Cybersecurity Audit Certification',
            subtitle: 'Mainjobs',
            dateRange: '2025/03/27 - 2025/05/02',
            time: '30 hours',
            linkUrl: 'https://www.linkedin.com/in/josejoaquinsoftware/'
          }
        ]
      }
    },
    {
      id: 6,
      title: 'GitHub activity',
      description: 'A real-time visualization of my daily contributions and coding activity on GitHub:',
      extraData: {
        githubChart: {
          id: 1,
          title: 'Contribution chart',
          imgUrl: 'https://ghchart.rshah.org/1337KR3W'
        }
      }
    },
  ];

  getSections(): SectionCard[] {
    return this.sections;
  }

  getHeroData() {
    return this.sections.find(s => s.id === 0)!;
  }

}

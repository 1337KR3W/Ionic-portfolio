import { Injectable } from '@angular/core';
import { Work } from 'src/app/models/work/work.model';

@Injectable({
  providedIn: 'root',
})
export class WorkService {

  private readonly works: Work[] = [
    {
      id: 1,
      title: 'Internship as Junior FullStack developer at Insinno España S.L.',
      description: 'Focused on mastering Full Stack development by building responsive frontends and robust backend logic during my internship at Insinno España S.L',
      dateRange: '2025/09/29 - 2026/03/28',
      imgUrl: 'http://www.insinnospain.com/wp-content/uploads/2023/05/inisnno-logo.png',
      linkUrl: 'https://www.linkedin.com/in/josejoaquinsoftware/'
    },
  ]

  getWorks(): Work[] {
    return this.works;
  }

}

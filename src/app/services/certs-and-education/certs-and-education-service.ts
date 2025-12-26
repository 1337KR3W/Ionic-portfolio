import { Injectable } from '@angular/core';
import { Certification } from 'src/app/models/cert-and-education/cert.model';
@Injectable({
  providedIn: 'root',
})
export class CertsAndEducationService {

  private readonly certsAndEducation: Certification[] = [
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
    },

  ];

  getCertifications(): Certification[] {
    return this.certsAndEducation;
  }

}

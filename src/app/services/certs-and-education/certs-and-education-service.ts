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
      imgUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFunNkHpG70PA/profile-treasury-document-cover-images_480/B56ZoCYDRPKIBI-/0/1760976452326?e=1767286800&v=beta&t=7j4pQz9aRty2Q9HYoFVRRAcQmPFkehpFjmXiKLnjPOU',
      linkUrl: 'https://www.linkedin.com/in/josejoaquinsoftware/'
    },
    {
      id: 2,
      title: 'Cybersecurity Audit Certification',
      subtitle: 'Mainjobs',
      dateRange: '2025/03/27 - 2025/05/02',
      time: '30 hours',
      imgUrl: 'https://media.licdn.com/dms/image/v2/D562DAQFunNkHpG70PA/profile-treasury-document-cover-images_480/B56ZoCYDRPKIBI-/0/1760976452326?e=1767286800&v=beta&t=7j4pQz9aRty2Q9HYoFVRRAcQmPFkehpFjmXiKLnjPOU',
      linkUrl: 'https://www.linkedin.com/in/josejoaquinsoftware/'
    },

  ];

  getCertifications(): Certification[] {
    return this.certsAndEducation;
  }

}

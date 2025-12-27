import { Component, inject } from '@angular/core';
import { IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenu, IonHeader, IonToolbar, IonTitle, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
  imports: [IonContent, IonList, IonItem, IonIcon, IonLabel, IonMenu, IonHeader, IonToolbar, IonTitle],
})
export class HeaderMobileComponent {

  menuItems = [
    { id: '', label: '', icon: '' },
    { id: 'home', label: 'Home', icon: 'home-outline' },
    { id: 'about-me', label: 'About Me', icon: 'person-outline' },
    { id: 'skills', label: 'Skills', icon: 'code-working-outline' },
    { id: 'projects', label: 'Projects', icon: 'folder-open-outline' },
    { id: 'works', label: 'Work Experience', icon: 'briefcase-outline' },
    { id: 'education', label: 'Certs & Education', icon: 'school-outline' }
  ];

  constructor() { }

  async navigateTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}

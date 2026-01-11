import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonMenuButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonMenuButton],
})
export class HeaderComponent {
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


}

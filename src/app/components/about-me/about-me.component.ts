import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonAvatar, IonLabel, IonButton, IonIcon, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonAvatar, IonLabel, IonButton, IonIcon, IonGrid, IonRow, IonCol],
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}

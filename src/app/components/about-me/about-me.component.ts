import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonAvatar, IonLabel, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonAvatar, IonLabel, IonGrid, IonRow, IonCol, IonSegment, IonSegmentButton],
})
export class AboutMeComponent implements OnInit {

  activeTab: string = 'skills';
  segmentChanged(event: any) {
    this.activeTab = event.detail.value;
  }

  constructor() { }

  ngOnInit() { }

}

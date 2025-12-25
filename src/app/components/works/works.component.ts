import { Component, inject, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { Work } from 'src/app/models/work/work.model';
import { WorkService } from 'src/app/services/work/work-service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonGrid, IonRow, IonCol],
})
export class WorksComponent implements OnInit {
  private readonly worksService = inject(WorkService);
  works: Work[] = [];
  constructor() { }

  ngOnInit() {
    this.works = this.worksService.getWorks();
  }

}

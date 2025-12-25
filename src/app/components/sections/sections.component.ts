import { Component, inject, Input, OnInit } from '@angular/core';
import { SectionCard } from 'src/app/models/card/section-card/section-card.model';
import { SectionService } from 'src/app/services/section/section-service';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent],
})
export class SectionsComponent implements OnInit {
  @Input({ required: true }) section!: SectionCard;
  private readonly sectionService = inject(SectionService);
  sections: SectionCard[] = [];
  constructor() { }
  ngOnInit() {
    this.sections = this.sectionService.getSections();
  }


}

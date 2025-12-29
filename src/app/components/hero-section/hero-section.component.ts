import { Component, Input } from '@angular/core';
import { SectionCard } from 'src/app/models/card/section-card/section-card.model';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {

  @Input({ required: true }) data!: SectionCard;

}

import { Component, inject, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonCol } from "@ionic/angular/standalone";
import { Skill } from 'src/app/models/skill/skill.model';
import { SkillService } from 'src/app/services/skill/skill-service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [IonGrid, IonRow, IonCol],
})
export class SkillsComponent implements OnInit {

  private readonly skillService = inject(SkillService);
  skills: Skill[] = [];
  constructor() { }
  ngOnInit() {
    this.skills = this.skillService.getSkills();
  }

}

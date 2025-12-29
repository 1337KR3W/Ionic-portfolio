import { Component, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonCol, IonRow } from "@ionic/angular/standalone";
import { GitHubChart } from 'src/app/models/github-chart/github-chart.model';

@Component({
  selector: 'app-github-chart',
  templateUrl: './github-chart.component.html',
  styleUrls: ['./github-chart.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonCol, IonRow],
})
export class GithubChartComponent {


  @Input() gitHubChart?: GitHubChart;


}

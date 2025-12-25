import { Component, inject, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonCol, IonRow } from "@ionic/angular/standalone";
import { GitHubChart } from 'src/app/models/github-chart/github-chart.model';
import { GithubChartService } from 'src/app/services/github-chart/github-chart-service';

@Component({
  selector: 'app-github-chart',
  templateUrl: './github-chart.component.html',
  styleUrls: ['./github-chart.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonGrid, IonCol, IonRow],
})
export class GithubChartComponent implements OnInit {

  private readonly gitHubChartService = inject(GithubChartService);
  gitHubChart: GitHubChart[] = [];

  constructor() { }

  ngOnInit() {
    this.gitHubChart = this.gitHubChartService.getGitHubChart();
  }

}

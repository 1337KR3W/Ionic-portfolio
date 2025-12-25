import { Injectable } from '@angular/core';
import { GitHubChart } from 'src/app/models/github-chart/github-chart.model';

@Injectable({
  providedIn: 'root',
})
export class GithubChartService {

  private readonly gitHubChart: GitHubChart[] = [
    {
      id: 1,
      title: 'Contribution chart',
      imgUrl: 'https://ghchart.rshah.org/1337KR3W'
    },
  ];

  getGitHubChart(): GitHubChart[] {
    return this.gitHubChart;
  }

}

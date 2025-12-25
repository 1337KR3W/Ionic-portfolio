import { TestBed } from '@angular/core/testing';

import { GithubChartService } from './github-chart-service';

describe('GithubChart', () => {
  let service: GithubChartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubChartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

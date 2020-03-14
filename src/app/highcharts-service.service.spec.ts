import { TestBed } from '@angular/core/testing';

import { HighchartsServiceService } from './highcharts-service.service';

describe('HighchartsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighchartsServiceService = TestBed.get(HighchartsServiceService);
    expect(service).toBeTruthy();
  });
});

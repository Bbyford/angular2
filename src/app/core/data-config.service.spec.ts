/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataConfigService } from './data-config.service';

describe('Service: DataConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataConfigService]
    });
  });

  it('should ...', inject([DataConfigService], (service: DataConfigService) => {
    expect(service).toBeTruthy();
  }));
});

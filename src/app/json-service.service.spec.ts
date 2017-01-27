/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonServiceService } from './json-service.service';

describe('JsonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonServiceService]
    });
  });

  it('should ...', inject([JsonServiceService], (service: JsonServiceService) => {
    expect(service).toBeTruthy();
  }));
});

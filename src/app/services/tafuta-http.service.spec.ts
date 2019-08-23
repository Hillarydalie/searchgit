import { TestBed } from '@angular/core/testing';

import { TafutaHttpService } from './tafuta-http.service';

describe('TafutaHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TafutaHttpService = TestBed.get(TafutaHttpService);
    expect(service).toBeTruthy();
  });
});

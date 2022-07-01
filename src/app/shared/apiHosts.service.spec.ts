import { TestBed } from '@angular/core/testing';

import { ApiServiceHosts } from './apiHosts.service';

describe('ApiService', () => {
  let service: ApiServiceHosts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServiceHosts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

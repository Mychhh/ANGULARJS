import { TestBed } from '@angular/core/testing';

import { AsyncPipeService } from './async-pipe.service';

describe('AsyncPipeService', () => {
  let service: AsyncPipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncPipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

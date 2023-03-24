import { TestBed } from '@angular/core/testing';

import { ComputerIsService } from './computer-is.service';

describe('ComputerIsService', () => {
  let service: ComputerIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

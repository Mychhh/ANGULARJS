import { TestBed } from '@angular/core/testing';

import { ComputerCsService } from './computer-cs.service';

describe('ComputerCsService', () => {
  let service: ComputerCsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerCsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

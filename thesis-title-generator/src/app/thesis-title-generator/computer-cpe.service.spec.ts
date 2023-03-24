import { TestBed } from '@angular/core/testing';

import { ComputerCpeService } from './computer-cpe.service';

describe('ComputerCpeService', () => {
  let service: ComputerCpeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputerCpeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

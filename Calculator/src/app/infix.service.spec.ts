import { TestBed } from '@angular/core/testing';

import { InfixService } from './infix.service';

describe('InfixService', () => {
  let service: InfixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

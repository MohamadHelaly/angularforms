import { TestBed } from '@angular/core/testing';

import { Employee2Service } from './employee2.service';

describe('Employee2Service', () => {
  let service: Employee2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Employee2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

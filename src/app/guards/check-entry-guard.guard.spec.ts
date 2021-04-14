import { TestBed } from '@angular/core/testing';

import { CheckCustomerEntryGuard } from './check-customer-entry.guard';

describe('CheckCustomerEntryGuard', () => {
  let guard: CheckCustomerEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckCustomerEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

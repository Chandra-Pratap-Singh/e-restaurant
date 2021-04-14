import { TestBed } from '@angular/core/testing';

import { CheckAdminEntryGuard } from './check-admin-entry.guard';

describe('CheckAdminEntryGuard', () => {
  let guard: CheckAdminEntryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CheckAdminEntryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

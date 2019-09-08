import { TestBed } from '@angular/core/testing';

import { ListetransactionService } from './listetransaction.service';

describe('ListetransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListetransactionService = TestBed.get(ListetransactionService);
    expect(service).toBeTruthy();
  });
});

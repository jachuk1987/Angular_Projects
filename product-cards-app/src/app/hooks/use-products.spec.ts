import { TestBed } from '@angular/core/testing';

import { UseProductsService } from './use-products';

describe('UseProducts', () => {
  let service: UseProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

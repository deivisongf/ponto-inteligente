import { TestBed } from '@angular/core/testing';

import { FuncinarioService } from './funcinario.service';

describe('FuncinarioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuncinarioService = TestBed.get(FuncinarioService);
    expect(service).toBeTruthy();
  });
});

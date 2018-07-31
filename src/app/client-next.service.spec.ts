import { TestBed, inject } from '@angular/core/testing';

import { ClientNextService } from './client-next.service';

describe('ClientNextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientNextService]
    });
  });

  it('should be created', inject([ClientNextService], (service: ClientNextService) => {
    expect(service).toBeTruthy();
  }));
});

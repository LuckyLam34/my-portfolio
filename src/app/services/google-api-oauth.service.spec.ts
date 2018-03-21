import { TestBed, inject } from '@angular/core/testing';

import { GoogleApiOauthService } from './google-api-oauth.service';

describe('GoogleApiOauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleApiOauthService]
    });
  });

  it('should be created', inject([GoogleApiOauthService], (service: GoogleApiOauthService) => {
    expect(service).toBeTruthy();
  }));
});

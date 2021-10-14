import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GetPostsEffects } from './get-posts.effects';

describe('GetPostsEffects', () => {
  let actions$: Observable<any>;
  let effects: GetPostsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetPostsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(GetPostsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

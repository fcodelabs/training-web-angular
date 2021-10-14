import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AddPostEffects } from './add-post.effects';

describe('AddPostEffects', () => {
  let actions$: Observable<any>;
  let effects: AddPostEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddPostEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AddPostEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

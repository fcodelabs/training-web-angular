import * as diaryCardActions from './diary-home.actions';
import { initialState } from './diary-home.state';
import { createReducer, on } from '@ngrx/store';

export const diaryCardReducer = createReducer(
  initialState,
  on(diaryCardActions.addDiaryCard, (state,props) => {
    return {
      ...state,
      diaryCards: [...state.diaryCards, props.diaryCard]
    };
  }),
);


import { createSelector } from '@ngrx/store';
import { AppState } from 'src/types/appState.interface';

export const selectDiaryState = (state: AppState) => state.diaries;

export const isLoadingSelect = createSelector(
  selectDiaryState,
  (state) => state.isLoading
);

export const errorSelect = createSelector(
  selectDiaryState,
  (state) => state.error
);

export const diariesSelect = createSelector(
  selectDiaryState,
  (state) => state.diaries
);

import { createSelector } from '@ngrx/store';
import { AppState } from 'src/types/app-state.interface';

export const selectFeatureCards = (state: AppState) => state.cards;

export const isLoadingSelector = createSelector(
  selectFeatureCards,
  (cardsState) => cardsState.isLoading
);
export const cardsSelector = createSelector(
  selectFeatureCards,
  (cardsState) => cardsState.cards
);
export const errSelector = createSelector(
  selectFeatureCards,
  (cardsState) => cardsState.error
);

import { createSelector } from '@ngrx/store';

export const selectFeatureCards = (state: any) => state.cards;

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

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DiaryCard } from '../types/DiaryCard';

export const diaryCardFeature = createFeatureSelector<DiaryCard>('cards');
export const selectCards = createSelector(
  diaryCardFeature,
  (state) => state.cards
);
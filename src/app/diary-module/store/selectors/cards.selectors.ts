import { createFeatureSelector, createSelector } from '@ngrx/store'
import { DiaryHomeState } from '../reducers/cards.reducers'

export const diaryCardFeature = createFeatureSelector<DiaryHomeState>('cards')

export const selectCards = createSelector(
    diaryCardFeature,
    (state) => state.cards
)

import { createFeatureSelector, createSelector } from '@ngrx/store'
import { DiaryHomeState } from '../state/diaryHome.state'

export const diaryCardFeature = createFeatureSelector<DiaryHomeState>('cards')

export const selectCards = createSelector(
    diaryCardFeature,
    (state) => state.cards
)

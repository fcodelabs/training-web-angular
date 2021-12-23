import {createSelector,createFeatureSelector} from "@ngrx/store";
import {AppState} from "./app.state";

export const diaryCardsSelector = createFeatureSelector<AppState>('diaryCards');

export const selectDiaryCards = createSelector(
  diaryCardsSelector,
  (state:AppState) => state.diaryCards

);
export const selectLoadingState = createSelector(
  diaryCardsSelector,
  (state:AppState) => state.loadingState
)

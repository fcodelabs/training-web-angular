import { createReducer, on} from "@ngrx/store";
import {
  addDiaryCard,
  getDiaryCardsFailure,
  getDiaryCardsSuccess,
  setLoadingSpinnerState,
} from "./cards.actions";
import {AppState} from "./app.state";

export const initialState : AppState = {
  loadingState:false,
  diaryCards:[],
}

export const diarycardsReducer = createReducer(
  initialState,
  on(addDiaryCard, (state, {diarycard}) => ({...state, diaryCards:[diarycard, ...state.diaryCards]})),
  on(getDiaryCardsSuccess, (state, {diarycards}) => ({...state, diaryCards:[...diarycards].sort((a, b) => (a.created < b.created ? 1 : -1))})),
  on(getDiaryCardsFailure, state => state),
  on(setLoadingSpinnerState, (state,{loadingStatus})=>({...state, loadingState:loadingStatus}))
)


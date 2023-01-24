import { createReducer, on } from '@ngrx/store';
import { DiaryState } from '../state/diaryState';
import {
  addDiary,
  addDiarySuccess,
  addDiaryFailure,
  loadDiaries,
  loadDiariesSuccess,
  loadDiariesFailure,
} from '../actions/diaryActions';

export const initialState: DiaryState = {
  diaries: [],
  isLoading: false,
  error: null,
};

export const diaryReducer = createReducer(
  initialState,
  on(loadDiaries, (state) => ({ ...state, isLoading: true })),
  on(loadDiariesSuccess, (state, { diaries }) => ({
    ...state,
    diaries,
    isLoading: false,
  })),
  on(loadDiariesFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  })),
  on(addDiary, (state) => ({ ...state, isLoading: true })),
  on(addDiarySuccess, (state, { diary }) => ({
    ...state,
    diaries: [...state.diaries, diary],
    isLoading: false,
  })),
  on(addDiaryFailure, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);

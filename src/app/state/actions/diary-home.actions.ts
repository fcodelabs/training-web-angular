import {createAction, props} from '@ngrx/store';
import DiaryCardObject from "../../models/DiaryCardObject";

export enum AddDiaryCardActionTypes {
  ADD_DIARY_CARD = '[Add Diary Cards] Add',
  ADD_DIARY_CARD_SUCCESS='[Add Diary Cards] Success',
  ADD_DIARY_CARD_FAILURE='[Add Diary Cards] Failure'
}

export const addDiaryCard = createAction(AddDiaryCardActionTypes.ADD_DIARY_CARD,   props<{
  diaryCard: DiaryCardObject
}>());

export const addDiaryCardSuccess = createAction(AddDiaryCardActionTypes.ADD_DIARY_CARD_SUCCESS);

export const addDiaryCardFailure  = createAction(AddDiaryCardActionTypes.ADD_DIARY_CARD_FAILURE,
  props<{error:Error}>()
);

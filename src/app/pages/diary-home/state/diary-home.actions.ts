import {createAction, props} from '@ngrx/store';
import DiaryCardObject from "../../../models/DiaryCardObject";


export const addDiaryCard = createAction('addDiaryCard',   props<{
  diaryCard: DiaryCardObject
}>());

import { createAction, props } from '@ngrx/store';
import { Diary } from 'src/app/models/diary';

export const loadDiaries = createAction('[Diary] Load Diaries');
export const loadDiariesSuccess = createAction(
  '[Diary] Load Diaries Success',
  props<{ diaries: Diary[] }>()
);
export const loadDiariesFailure = createAction(
  '[Diary] Load Diaries Failure',
  props<{ error: string }>()
);

export const addDiary = createAction(
  '[Diary] Add Diary',
  props<{ diary: Diary }>()
);
export const addDiarySuccess = createAction(
  '[Diary] Add Diary Success',
  props<{ diary: Diary }>()
);
export const addDiaryFailure = createAction(
  '[Diary] Add Diary Failure',
  props<{ error: string }>()
);

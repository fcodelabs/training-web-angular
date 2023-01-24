import { Injectable } from '@angular/core';
import { DiaryService } from 'src/app/utils/diary.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  loadDiaries,
  loadDiariesSuccess,
  loadDiariesFailure,
  addDiary,
  addDiarySuccess,
  addDiaryFailure,
} from '../actions/diaryActions';
import { mergeMap, map, catchError } from 'rxjs/operators';

@Injectable()
export class DiaryEffects {
  constructor(private actions$: Actions, private diaryService: DiaryService) {}

  loadDiaries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadDiaries),
      mergeMap(() => {
        return this.diaryService.getDiaries().pipe(
          map((diaries) => loadDiariesSuccess({ diaries })),
          catchError((error) => [loadDiariesFailure({ error })])
        );
      })
    )
  );
  addDiary$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDiary),
      mergeMap((action) => {
        return this.diaryService.addDiarie(action.diary).pipe(
          map((diary) => addDiarySuccess({ diary })),
          catchError((error) => [addDiaryFailure({ error })])
        );
      })
    )
  );
}

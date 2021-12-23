import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {DiaryCardService} from "../services/diary-card.service";
import {catchError, concatMap, exhaustMap, map, mergeMap, tap} from "rxjs/operators";
import {EMPTY} from "rxjs";
import {addDiaryCard, getDiaryCards, getDiaryCardsSuccess, setLoadingSpinnerState} from "./cards.actions";
import {AppState} from "./app.state";
import {Store} from "@ngrx/store";

@Injectable()
export class DiaryCardEffect {
  constructor(
    private actions$ : Actions,
    private diaryCardService : DiaryCardService,
    private store :Store<AppState>
    ) {
  }

  loadDiaryCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getDiaryCards),
      exhaustMap(() => {
        this.store.dispatch(setLoadingSpinnerState({loadingStatus: true}));
        return this.diaryCardService.getDiaryCards().pipe(
        map((diarycards) => {
          this.store.dispatch(setLoadingSpinnerState({loadingStatus: false}))
          return  getDiaryCardsSuccess({diarycards})
        }),
        catchError(() => EMPTY),
      )}),
    )
  );

  addDiaryCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addDiaryCard),
      tap(({diarycard}) => this.diaryCardService.addDiaryCard(diarycard)),
      ),{ dispatch: false }
  );

}

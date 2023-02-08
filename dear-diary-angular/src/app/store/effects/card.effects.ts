import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HomePageService } from 'src/app/services/homePage.services';
import {
  getCards,
  getCardsSuccess,
  getCardsFailure,
  addCard,
  addCardSuccess,
  addCardFailure,
} from '../actions/card.action';

@Injectable()
export class HomePageEffects {
  loadAllCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCards), 
      mergeMap(() =>
        this.HomePageService.getAll().pipe(
          map((cards) => getCardsSuccess({ cards })),
          catchError((error) => of(getCardsFailure({ error })))
        )
      )
    )
  ); 

  addCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCard),
      mergeMap((action) =>
        this.HomePageService.add(action.card).pipe(
         map(() => addCardSuccess()),
            catchError((error) => of(addCardFailure({ error })))
          )
        )
      )
    )
  ;

  constructor(
    private actions$: Actions,
    private HomePageService: HomePageService
  ) {}
}

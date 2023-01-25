import { Injectable } from '@angular/core';
import { CardsService } from 'src/app/services/card.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as CardsActions from '../actions/card.action';

@Injectable()
export class CardsEffects {
  addCard$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsActions.addCardStart),
      mergeMap((newcard) => {
        return this.cardsService.addCards(newcard.card).pipe(
          map((card) => CardsActions.addCardSuccess({ card })),
          catchError((error) =>
            of(CardsActions.addCardFailure({ error: error.message }))
          )
        );
      })
    )
  );

  getCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CardsActions.getCard),
      mergeMap(() => {
        return this.cardsService.getCards().pipe(
          map((cards) => CardsActions.getCardSuccess({ cards })),
          catchError((error) =>
            of(CardsActions.getCardFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(private actions$: Actions, private cardsService: CardsService) {}
}

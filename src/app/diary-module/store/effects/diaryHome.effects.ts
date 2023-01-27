import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY, of } from 'rxjs'
import { map, mergeMap, catchError } from 'rxjs/operators'
import { DiaryHomeService } from '../../services/diaryHome.services'
import {
    getCards,
    getCardsSuccess,
    addCard,
    actionFailed,
    addCardSuccess,
} from '../actions/cards.actions'

@Injectable()
export class DiaryHomeEffects {
    loadCards$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getCards),
            mergeMap(() =>
                this.diaryHomeService.getCards().pipe(
                    map(
                        (cards) => getCardsSuccess({ cards }),
                        catchError((error) => of(actionFailed({ error })))
                    )
                )
            )
        )
    )

    addCard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addCard),
            mergeMap((action) =>
                this.diaryHomeService.addCard(action.card).pipe(
                    map(
                        () => addCardSuccess(),
                        catchError((error) => of(actionFailed({ error })))
                    )
                )
            )
        )
    )

    constructor(
        private actions$: Actions,
        private diaryHomeService: DiaryHomeService
    ) {}
}

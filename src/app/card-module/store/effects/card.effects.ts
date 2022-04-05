import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CardService } from "../../services/card.service";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { EMPTY } from "rxjs";
import * as cardActions from '../actions/card.actions';

@Injectable()
export class CardEffect {
    constructor(private actions: Actions, private cardService: CardService) { }

    getCards = createEffect(() =>
        this.actions.pipe(
            ofType(cardActions.GET_CARD),
            exhaustMap(() => this.cardService.getPosts().pipe(
                map((cards) => new cardActions.GetCards(cards)),
                catchError(() => EMPTY)
            ))
        ));

    addCards = createEffect(() =>
        this.actions.pipe(
            ofType(cardActions.ADD_CARD),
            tap(({ card }) => this.cardService.addPost(card)),
        ), { dispatch: false }
    )
}

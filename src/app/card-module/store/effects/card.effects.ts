import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CardService } from "../../services/card.service";
import { catchError, exhaustMap, map, tap } from "rxjs/operators";
import { EMPTY } from "rxjs";
import { addPost, getPostsSuccess, getPosts } from '../actions/card.actions';

@Injectable()
export class CardEffect {
    constructor(private actions: Actions, private cardService: CardService) { }

    getCards = createEffect(() =>
        this.actions.pipe(
            ofType(getPosts),
            exhaustMap(() => this.cardService.getPosts().pipe(
                map((posts) => getPostsSuccess({posts})),
                catchError(() => EMPTY)
            ))
        ));

    addCards = createEffect(() =>
        this.actions.pipe(
            ofType(addPost),
            tap(({ post }) => this.cardService.addPost(post)),
        ), { dispatch: false }
    )
}

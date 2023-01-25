import { Action, createReducer, on } from '@ngrx/store'
import { Card } from '../../components/diary-card/card'
import * as CardActions from '../actions/cards.actions'
import { DiaryHomeState } from '../state/diaryHome.state'


export const initialState: DiaryHomeState = {
    cards: [],
    error: null,
}

export const cardsReducer = createReducer(
    initialState,
    on(CardActions.getCards, (state) => ({ ...state })),
    on(CardActions.getCardsSuccess, (state, action) => ({
        ...state,
        cards: action.cards,
    })),
    on(CardActions.getCardsFailure, (state, action) => ({
        ...state,
    })),
    on(CardActions.addCard, (state, action) => ({
        ...state,
    })),
    on(CardActions.addCardSuccess, (state,) => ({
        ...state,
    })),
    on(CardActions.addCardFailure, (state, action) => ({
        ...state,
        error: action.error,
    }))
)

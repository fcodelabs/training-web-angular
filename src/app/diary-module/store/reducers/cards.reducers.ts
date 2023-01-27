import { createReducer, on } from '@ngrx/store'
import * as CardActions from '../actions/cards.actions'
import { DiaryHomeState } from '../state/diaryHome.state'


export const initialState: DiaryHomeState = {
    cards: [],
    isLoading:false,
    error: null,
}

export const cardsReducer = createReducer(
    initialState,
    on(CardActions.getCards, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(CardActions.getCardsSuccess, (state, action) => ({
        ...state,
        cards: action.cards,
        isLoading: false,
    })),
    on(CardActions.addCard, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(CardActions.addCardSuccess, (state, action) => ({
        ...state,
        isLoading: false,
    })),
    on(CardActions.actionFailed, (state, action) => ({
        ...state,
        error:action.error,
        isLoading: false,
    })),
)

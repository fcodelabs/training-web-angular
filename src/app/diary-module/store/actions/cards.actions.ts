import { createAction, props } from '@ngrx/store'
import { Card } from '../../components/diary-card/card'

export const getCards = createAction('[Home Page] Get Cards')
export const getCardsSuccess = createAction(
    '[Home Page] Get Cards Success',
    props<{ cards: Card[] }>()
)
export const getCardsFailure = createAction(
    '[Home Page] Get Cards Failure',
    props<{ error: string }>()
)
export const addCard = createAction(
    '[Home Page] Add Card',
    props<{ card: Card }>()
)
export const addCardSuccess = createAction(
    '[Home Page] Add Card Success',
    props<{ card: Card }>()
)
export const addCardFailure = createAction(
    '[Home Page] Add Card Failure',
    props<{ error: string }>()
)

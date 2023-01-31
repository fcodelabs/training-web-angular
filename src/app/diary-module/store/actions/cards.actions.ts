import { createAction, props } from '@ngrx/store'
import { Card } from '../../../models/card'

export const getCards = createAction('[Home Page] Get Cards')
export const getCardsSuccess = createAction(
    '[Home Page] Get Cards Success',
    props<{ cards: Card[] }>()
)
export const addCard = createAction(
    '[Home Page] Add Card',
    props<{ card: Card }>()
)
export const addCardSuccess = createAction('[Home Page] Add Card Success')
export const actionFailed = createAction(
    '[Commonn] Action Failure',
    props<{ error: string }>()
)

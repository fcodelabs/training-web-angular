import { Action } from "@ngrx/store";
import { Card } from '../../models/card.model';

export const ADD_CARD = "[CARD] Add"
export const GET_CARD = "[CARD] Get"
export const GET_CARD_SUCCESS = "[CARD] Get Card Success"

export class AddCard implements Action {
    readonly type = ADD_CARD

    constructor(public payload: Card) { }
}

export class GetCards implements Action {
    readonly type = GET_CARD_SUCCESS

    constructor(public payload: Card[]) { }
    // constructor() { }

}

export class CheckForCards implements Action {
    readonly type = GET_CARD;
}

export type Actions = AddCard | GetCards | CheckForCards


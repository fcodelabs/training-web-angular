import { Card } from "../../models/card.model";
import * as CardActions from '../actions/card.actions';

export function cardReducer(state: Card[] = [],
    action: CardActions.Actions) {
    switch (action.type) {
        case CardActions.ADD_CARD:
            return [...state, action.payload];
        case CardActions.GET_CARD_SUCCESS:
            return [...action.payload].sort((a, b) => (a.created < b.created ? 1 : -1));
        default:
            return state;
    }
}


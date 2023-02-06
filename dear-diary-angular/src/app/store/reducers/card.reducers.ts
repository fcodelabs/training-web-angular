import { Action, createReducer, on } from '@ngrx/store';
import { cardDetails } from 'src/app/models/cardDetails';
import * as CardActions from '../actions/card.action';
import { DiaryCard } from '../types/DiaryCard';

export const initialState: DiaryCard = {
  cards: [],
  error: null,
};
export const cardReducer = createReducer(
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


  on(CardActions.addCardSuccess, (state, action) => ({
    ...state,
    cards: [action.card, ...state.cards],
  })),


  on(CardActions.addCardFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

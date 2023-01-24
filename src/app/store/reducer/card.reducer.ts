import { createReducer, on } from '@ngrx/store';
import * as CardsActions from '../actions/card.action';

export const initialState: any = {
  isLoading: false,
  posts: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(CardsActions.getCard, (state) => ({ ...state, isLoading: true })),
  on(CardsActions.getCardSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    cards: action.cards,
  })),
  on(CardsActions.getCardFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),

  on(CardsActions.addCardStart, (state, actions) => ({
    ...state,
    isLoading: true,
  })),
  on(CardsActions.addCardSuccess, (state, actions) => ({
    ...state,
    isLoading: false,
  })),
  on(CardsActions.addCardFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);

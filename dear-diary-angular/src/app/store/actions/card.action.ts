import { createAction, props } from '@ngrx/store';
import { cardDetails } from 'src/app/models/cardDetails';

export const getCards = createAction('[Dear-diary Page] Get Cards');

export const getCardsSuccess = createAction(
  '[Dear-diary Page] Get Cards Success',
  props<{ cards: cardDetails[] }>()
);
export const getCardsFailure = createAction(
  '[Dear-diary Page] Get Cards Failure',
  props<{ error: string }>()
);
export const addCard = createAction(
  '[Dear-diary Page] Add Card',
  props<{ card: cardDetails }>()
);
export const addCardSuccess = createAction(
  '[Dear-diary Page] Add Card Success'
);
export const addCardFailure = createAction(
  '[Dear-diary Page] Add Card Failure',
  props<{ error: string }>()
);

import { createAction, props } from '@ngrx/store';
import { Card } from 'src/app/models/card.model';

export const getCard = createAction('[Card] Get Cards');
export const getCardSuccess = createAction(
  '[Card] Get Cards success',
  props<{ cards: Card[] }>()
);
export const getCardFailure = createAction(
  '[Card] Get Cards failure',
  props<{ error: string }>()
);

export const addCardStart = createAction(
  '[Card] Add Card',
  props<{ card: Card }>()
);
export const addCardSuccess = createAction(
  '[Card] Add Card success',
  props<{ card: Card }>()
);
export const addCardFailure = createAction(
  '[Card] Add Card failure',
  props<{ error: string }>()
);

import { createAction, props } from '@ngrx/store';

export const getCard = createAction('[Card] Get Cards');
export const getCardSuccess = createAction(
  '[Card] Get Cards success',
  props<{ cards: any[] }>()
);
export const getCardFailure = createAction(
  '[Card] Get Cards failure',
  props<{ error: string }>()
);

export const addCardStart = createAction(
  '[Card] Add Card',
  props<{ card: any }>()
);
export const addCardSuccess = createAction(
  '[Card] Add Card success',
  props<{ card: any }>()
);
export const addCardFailure = createAction(
  '[Card] Add Card failure',
  props<{ error: string }>()
);

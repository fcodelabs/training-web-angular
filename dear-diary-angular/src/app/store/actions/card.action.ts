import { createAction, props } from '@ngrx/store';
import { cardDetails } from 'src/app/models/cardDetails';


export const getCards = createAction('[Dear-diary Page] Get Cards');
export const getCardsSuccess = createAction('[Dear-diary Page] Get Cards Success',
 props<{cards:cardDetails[]}>()
);
export const getCardsFailure = createAction(
  '[Dear-diary Page] Get Cards Failure',
  props<{ error: string }>()
);
export const addCard = createAction(
  '[Home Page] Add Card',
  props<{ card: cardDetails }>()
);
export const addCardSuccess = createAction(
  '[Home Page] Add Card Success',
  props<{ card: cardDetails }>()
);
export const addCardFailure = createAction(
  '[Home Page] Add Card Failure',
  props<{ error: string }>()
);
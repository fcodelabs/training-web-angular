import { Card } from 'src/app/models/card.model';

export interface CardStateInterface {
  cards: Card[];
  isLoading: boolean;
  error: null | string;
}

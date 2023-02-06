import { cardDetails } from "src/app/models/cardDetails";

export interface DiaryCard {
  cards: cardDetails[];
  error: string | null;
}
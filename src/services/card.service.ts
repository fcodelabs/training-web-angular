import { Injectable } from '@angular/core';
import { Card } from 'src/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  listOfCards: Card[] = [];

  getCards() {
    return this.listOfCards;
  }

  addCard(card: Card) {
    this.listOfCards.push(card);
  }

}

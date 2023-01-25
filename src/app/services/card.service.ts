import { Injectable } from '@angular/core';
import {
  DocumentData,
  Firestore,
  addDoc,
  getDocs,
} from '@angular/fire/firestore';
import {
  collection,
  CollectionReference,
  onSnapshot,
} from '@firebase/firestore';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cards: Card[] = [];
  cardCollection: CollectionReference<DocumentData>;

  constructor(firestore: Firestore) {
    this.cardCollection = collection(firestore, 'diaryCards');
  }

  getCards(): Observable<Card[]> {
    onSnapshot(this.cardCollection, (snapshot) => {
      snapshot.forEach((change) => {
        this.cards.push({
          id: change.data()['time'],
          title: change.data()['title'],
          name: change.data()['name'],
          description: change.data()['description'],
        });
      });
    });
    return of(this.cards).pipe(delay(2000));
  }

  addCards(card: Card): Observable<Card> {
    const date = new Date();
    addDoc(this.cardCollection, card);

    return of({ ...card, id: date.toUTCString() }).pipe(delay(3000));
  }
}

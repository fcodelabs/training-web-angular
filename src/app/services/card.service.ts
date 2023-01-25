import { Injectable } from '@angular/core';
import {
  DocumentData,
  Firestore,
  addDoc,
  getDocs,
  doc,
  getDocsFromServer,
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
  cardCollection: CollectionReference<DocumentData>;

  constructor(firestore: Firestore) {
    this.cardCollection = collection(firestore, 'diaryCards');
  }

  getCards(): Observable<Card[]> {
    let cards: Card[] = [];
    getDocsFromServer(this.cardCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let diary: Card = {
          id: doc.id,
          title: doc.data().title,
          name: doc.data().name,
          description: doc.data().description,
        };
        cards.push(diary);
      });
    });

    return of(cards).pipe(delay(2000));
  }

  addCards(card: Card): Observable<Card> {
    const date = new Date();
    addDoc(this.cardCollection, card);

    return of({ ...card, id: date.toUTCString() }).pipe(delay(3000));
  }
}

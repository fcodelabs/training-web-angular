import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  onSnapshot,
  doc,
  Firestore,
  query,
  orderBy,
} from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cardDetails } from '../models/cardDetails';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  cards: cardDetails[] = [];
  cardsCollection: CollectionReference<DocumentData>;

  constructor(firestore: Firestore) {
    this.cardsCollection = collection(firestore, 'Post');
  }

  getAll(): Observable<cardDetails[]> {
    console.log('get card func...');
    return new Observable((observer) => {
      const qry = query(this.cardsCollection, orderBy('time'));
      onSnapshot(qry, (snapshot) => {
        const cards: any[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log('cards ', cards);
        observer.next(cards);
      });
    });
  }

  add(card: cardDetails) {
    const date = new Date();
    return new Observable((observer) => {
      addDoc(this.cardsCollection, {
        time: date,
        userName: card.userName,
        title: card.title,
        description: card.description,
      });
      observer.next();
    });
  }
}

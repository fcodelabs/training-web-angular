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
//import { Firestore, collectionData, docData, onSnapshot } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cardDetails } from '../models/cardDetails';

@Injectable({
  providedIn: 'root',
})
export class HomePageService { 
  cards:cardDetails[]=[]
  private cardsCollection: CollectionReference<DocumentData>;
  constructor(firestore: Firestore) {
    this.cardsCollection = collection(firestore, 'Post');
  }

  getAll() {
    return new Observable((observer) => {
      const qry = query(this.cardsCollection, orderBy('time', 'desc'));
      onSnapshot(qry, (snapshot) => {
        const cards: any[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(cards)
        observer.next(cards);
      });
    }) as Observable<cardDetails[]>;
  }

  add(card:cardDetails) {
    const date = new Date();
    return new Observable((observer) => {
      addDoc(this.cardsCollection, {
        time: date,
        name: card.userName,
        title: card.title,
        description: card.description,
      });
      observer.next();
    });
  }
}

import { Injectable } from '@angular/core';
import {
  DocumentData,
  Firestore,
  onSnapshot,
  addDoc,
} from '@angular/fire/firestore';
import { collection, CollectionReference } from '@firebase/firestore';

import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  cardList: any[] = [];
  cardCollection: CollectionReference<DocumentData>;

  constructor(firestore: Firestore) {
    this.cardCollection = collection(firestore, 'diaryCards');
  }

  getCards(): Observable<any[]> {
    onSnapshot(this.cardCollection, (snapshot) => {
      snapshot.forEach((change) => {
        this.cardList.push({
          timestamp: change.data()['time'],
          title: change.data()['title'],
          name: change.data()['name'],
          description: change.data()['description'],
        });
        const source = snapshot.metadata.fromCache ? 'local cache' : 'server';
        console.log('Data came from ' + source);
      });
      console.log(this.cardList);
    });
    return of(this.cardList).pipe(delay(2000));
  }

  addCards(card: any): Observable<any> {
    addDoc(this.cardCollection, {
      timeStamp: card.timeStamp,
      title: card.title,
      name: card.name,
      description: card.description,
    });
    const postobj = {
      timeStamp: '1',
      title: 'title1',
      name: 'username1',
      description: 'description1',
    };
    return of(postobj).pipe(delay(2000));
  }
}

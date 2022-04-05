import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Card } from '../models/card.model';

AngularFirestore
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private angularFirestore: AngularFirestore) { }

  public getPosts(): Observable<any> {
    return this.angularFirestore.collection('posts').valueChanges();
  }

  public addPost(card: Card): void {
    this.angularFirestore.collection('posts').add(card).catch(() => Error);
  }
}

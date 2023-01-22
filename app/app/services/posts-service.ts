import { Injectable } from '@angular/core';
import {
  collectionData,
  DocumentData,
  Firestore,
  onSnapshot,
  addDoc,
} from '@angular/fire/firestore';
import { collection, CollectionReference } from '@firebase/firestore';

import { Observable, delay, of, map } from 'rxjs';
import { PostInterface } from 'src/app/models/post-interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  cardList: PostInterface[] = [];
  postCollection: CollectionReference<DocumentData>;

  constructor(firestore: Firestore) {
    this.postCollection = collection(firestore, 'messages');
    //  this.item$ = collectionData(cardCollection);
  }

  getCards(): Observable<PostInterface[]> {
    onSnapshot(this.postCollection, (snapshot) => {
      snapshot.forEach((change) => {
        this.cardList.push({
          id: change.data()['time'],
          title: change.data()['title'],
          username: change.data()['name'],
          description: change.data()['description'],
          color: change.data()['colour'],
        });
        const source = snapshot.metadata.fromCache ? 'local cache' : 'server';
        console.log('Data came from ' + source);
      });
      console.log(this.cardList);
    });
    return of(this.cardList).pipe(delay(2000));
  }

  addCards(post: PostInterface): Observable<PostInterface> {
    const date = new Date();
    addDoc(this.postCollection, {
      time: date,
      title: post.title,
      name: post.username,
      description: post.description,
      colour: post.color,
    });
    const postobj = {
      id: '1',
      title: 'title1',
      description: 'description1',
      username: 'username1',
      color: 'color1',
    };
    return of(postobj).pipe(delay(2000));
  }
  getPosts(): Observable<PostInterface[]> {
    const posts = [
      {
        id: '1',
        title: 'title1',
        description: 'description1',
        username: 'username1',
        color: 'color1',
      },
      {
        id: '2',
        title: 'title2',
        description: 'description2',
        username: 'username2',
        color: 'color2',
      },
      {
        id: '3',
        title: 'title3',
        description: 'description3',
        username: '1username3',
        color: 'color3',
      },
    ];
    return of(posts).pipe(delay(3000));
  }
}

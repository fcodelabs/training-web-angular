import { Injectable } from '@angular/core';
import {
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  getDocs,
  addDoc,
} from '@angular/fire/firestore';
import { Observable, delay, of, map } from 'rxjs';
import { Diary } from '../model/diary';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  diaryCollection: CollectionReference<DocumentData>;

  constructor(firestore: Firestore) {
    this.diaryCollection = collection(firestore, 'diaries');
  }

  public getDiaries(): Observable<Diary[]> {
    let diaries: Diary[] = [];
    return new Observable((observer) => {
      getDocs(this.diaryCollection).then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          diaries.push({
            id: doc.id,
            title: doc.data().title,
            description: doc.data().description,
            name: doc.data().name,
          });
        });
        observer.next(diaries);
      });
    });
  }

  public addDiarie(diary: Diary) {
    return new Observable((observer) => {
      addDoc(this.diaryCollection, {
        title: diary.title,
        description: diary.description,
        name: diary.name,
      }).then((docRef) => {
        observer.next(docRef);
      });
    });
  }
}

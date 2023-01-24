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
    getDocs(this.diaryCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        let diary: Diary = {
          id: doc.id,
          title: doc.data().title,
          description: doc.data().description,
          name: doc.data().name,
        };
        diaries.push(diary);
      });
    });
    return of(diaries).pipe(delay(2000));
  }

  public addDiarie(diary: Diary): Observable<Diary> {
    const date = new Date();
    addDoc(this.diaryCollection, diary);

    return of({ ...diary, id: date.toUTCString() }).pipe(delay(2000));
  }
}

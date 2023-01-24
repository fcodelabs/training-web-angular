import { Injectable } from '@angular/core';
import {
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  getDocs,
  addDoc,
  onSnapshot,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
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
      onSnapshot(this.diaryCollection, (querySnapshot) => {
        diaries = [];
        querySnapshot.forEach((doc) => {
          diaries.push({ ...doc.data(), id: doc.id } as Diary);
        });
        observer.next(diaries);
      });
    });
  }

  public addDiarie(diary: Diary): Observable<Diary> {
    const date = new Date();
    return new Observable((observer) => {
      addDoc(this.diaryCollection, {
        ...diary,
        created: date,
        updated: date,
      }).then((docRef) => {
        observer.next({ ...diary, id: docRef.id } as Diary);
      });
    });
  }
}

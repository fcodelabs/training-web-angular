import { Injectable } from '@angular/core';
import {
  collection,
  CollectionReference,
  DocumentData,
  Firestore,
  getDocs,
  addDoc,
} from '@angular/fire/firestore';
import { Observable } from '@firebase/util';
import { Diary } from '../model/diary';

@Injectable({
  providedIn: 'root',
})
export class DiaryService {
  diaryCollection: CollectionReference<DocumentData>;

  constructor(firestore: Firestore) {
    this.diaryCollection = collection(firestore, 'diaries');
  }

  public getDiaries() {
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
    return diaries;
  }

  public addDiarie(diary: Diary) {
    addDoc(this.diaryCollection, {
      title: diary.title,
      description: diary.description,
      name: diary.name,
    }).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    });
  }
}

import { Injectable } from '@angular/core';
import DiaryCardObject from "../models/DiaryCardObject";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private firestore:AngularFirestore) { }
  public async addPost(diaryCard: DiaryCardObject):Promise<void>{
    console.log("awaaaa");
    await this.firestore.collection('diaryCards').add({title:diaryCard.title,subtitle:diaryCard.subtitle,description:diaryCard.description});
  }
}

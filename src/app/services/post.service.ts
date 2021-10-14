import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import Post from "../models/Post";
import firebase from "firebase/compat";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private firestore:AngularFirestore) {

  }
  public async addPost(post:Post):Promise<void>{
    await this.firestore.collection('posts').add({title:post.title,description:post.description});
  }

  public getPost(){
    return this.firestore.collection('posts').snapshotChanges().pipe(map((querySnapshot) => {
      return querySnapshot.map((doc) => {
        console.log(doc)
        const data = doc.payload.doc.data();
        // @ts-ignore
        const post = new Post(data.title,data.description);
        return post
      });
    }))
  }
}

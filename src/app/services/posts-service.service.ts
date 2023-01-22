import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { PostInterface } from '../models/post-interface';

@Injectable({
  providedIn: 'root',
})
export class PostsServiceService {
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
return of(posts).pipe();
 
  }
  constructor() {}
}

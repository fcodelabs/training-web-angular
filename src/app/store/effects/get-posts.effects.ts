import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PostService} from "../../services/post.service";
import {GetPosts, GetPostsFailure, GetPostsSuccess} from "../actions/get-post.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";



@Injectable()
export class GetPostsEffects {



  constructor(private actions$: Actions,private postService:PostService) {}

  public getPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(GetPosts),
      mergeMap(() => {
        return this.postService.getPost().pipe(
          map((posts) => GetPostsSuccess({ data:posts })),
          catchError((e) => of(GetPostsFailure({ error: `${e}` })))
        );
      })
    );
  });
}

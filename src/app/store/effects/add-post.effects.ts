import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {PostService} from "../../services/post.service";
import { mergeMap } from 'rxjs/operators';
import {submitPost, SubmitPostFailure, SubmitPostSuccess} from "../actions/add-post.actions";


@Injectable()
export class AddPostEffects {
  constructor(private actions$: Actions,private postService:PostService) {
  }

  public getPosts$ = createEffect(() => {

    return this.actions$.pipe(
      ofType(submitPost),
      mergeMap(async (action) => {
        return this.postService.addPost(action.post).then(()=>SubmitPostSuccess()).catch((e)=>SubmitPostFailure({error:e}));
      })
    );
  });

}

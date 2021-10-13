import { createAction, props } from '@ngrx/store';
import Post from "../../models/Post";

export enum AddFormActionTypes {
  ADD_POST = '[Add Post] Submit'
}

export const submitPost = createAction(AddFormActionTypes.ADD_POST,
  props<{
      post: Post
  }>());

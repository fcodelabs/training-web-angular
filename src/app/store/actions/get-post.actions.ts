import { createAction, props } from '@ngrx/store';
import Post from "../../models/Post";

export const GetPosts = createAction(
  '[GetPost] GetPosts'
);

export const GetPostsSuccess = createAction(
  '[GetPost] GetPosts Success',
  props<{ data: Post[] }>()
);

export const GetPostsFailure = createAction(
  '[GetPost] GetPosts Failure',
  props<{ error: any }>()
);

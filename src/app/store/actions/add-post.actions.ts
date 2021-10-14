import { createAction, props } from '@ngrx/store';
import Post from "../../utils/models/Post";

export enum AddFormActionTypes {
  ADD_POST = '[Add Post] Submit',
  ADD_POST_SUCCESS='[Add Post] Success',
  ADD_POST_FAILURE='[Add Post] Failure'
}

export const submitPost = createAction(AddFormActionTypes.ADD_POST,
  props<{
      post: Post
  }>());

export const SubmitPostSuccess = createAction(AddFormActionTypes.ADD_POST_SUCCESS)

export const SubmitPostFailure  = createAction(AddFormActionTypes.ADD_POST_FAILURE,
  props<{error:Error}>()

)

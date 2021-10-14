import { Action, createReducer, on } from '@ngrx/store';
import Post from "../../utils/models/Post";
import {submitPost, SubmitPostSuccess} from "../actions/add-post.actions";
import {GetPosts, GetPostsFailure, GetPostsSuccess} from "../actions/get-post.actions";


export interface postsState {
  posts:Post[]
}

export const initialState: postsState = {
  posts:[]
};


export const postReducer = createReducer(
  initialState,
  on(GetPosts, (state) => ({ ...state})),
  on(GetPostsSuccess, (state, props) =>({...state,posts:props.data})
  ),
  on(SubmitPostSuccess, (state) => { return {...state}})
);

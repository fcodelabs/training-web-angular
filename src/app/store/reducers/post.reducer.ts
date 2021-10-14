import { Action, createReducer, on } from '@ngrx/store';
import Post from "../../models/Post";
import {submitPost, SubmitPostSuccess} from "../actions/add-post.actions";
import {GetPosts, GetPostsFailure, GetPostsSuccess} from "../actions/get-post.actions";


export interface postsState {
  posts:Post[]
}

export const initialState: postsState = {
  posts:[new Post('I Love Cakes','Cake is my Favourite Food i love that taste'),new Post('I Love Cakes','Cake is my Favourite Food i love that taste')]
};


export const postReducer = createReducer(
  initialState,
  on(GetPosts, (state) => ({ ...state})),
  on(GetPostsSuccess, (state, props) =>({...state,posts:props.data})
  ),
  on(SubmitPostSuccess, (state) => { return {...state}})
);

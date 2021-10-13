import { Action, createReducer, on } from '@ngrx/store';
import Post from "../../models/Post";
import {submitPost} from "../actions/add-post.actions";


export interface postsState {
  posts:Post[]
}

export const initialState: postsState = {
  posts:[new Post('I Love Cakes','Cake is my Favourite Food i love that taste'),new Post('I Love Cakes','Cake is my Favourite Food i love that taste')]
};


export const postReducer = createReducer(
  initialState,
  on(submitPost, (state, props) => { return {...state, posts: [...state.posts, props.post]}})
);


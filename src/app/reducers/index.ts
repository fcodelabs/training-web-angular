import {postListReducer, PostListState} from "./post.reducer";
import {ActionReducerMap} from "@ngrx/store";

export const rootReducer = {};
export interface AppState{
  postList:PostListState;
}

export const reducers:ActionReducerMap<AppState,any>={
  postList:postListReducer
}

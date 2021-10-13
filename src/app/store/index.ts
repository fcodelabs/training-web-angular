import { ActionReducerMap } from "@ngrx/store";
import {postReducer, postsState} from "./reducers/post.reducer";

export enum Features {
  Posts = 'posts'
}

export interface RootState {
  posts:postsState;
}

export const reducers: ActionReducerMap<RootState> = {
  posts:postReducer
}

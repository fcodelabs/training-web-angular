import { createAction, props } from "@ngrx/store";
import { Card } from "../../models/card.model";

export const addPost = createAction('[Post] Add post', props<{ post: Card }>());

export const getPosts = createAction('[Post] Get posts');

export const getPostsSuccess = createAction('[Post] Get posts successfully', props<{ posts: Card[] }>());

export const getPostsFailure = createAction('[Post] Get posts fail');












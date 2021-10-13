import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Features } from "..";
import {postsState} from "../reducers/post.reducer";

export const selectFeature = createFeatureSelector<postsState>(
  Features.Posts
);

export const selectPosts = createSelector(
  selectFeature,
  state => state.posts
);

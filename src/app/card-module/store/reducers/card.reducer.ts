import { createReducer, on } from "@ngrx/store";
import { addPost, getPostsFailure, getPostsSuccess } from "../actions/card.actions";
import { Card } from "../../models/card.model";

export const initialState: Card[] = [];

export const cardReducer = createReducer(initialState,
    on(addPost, (state, { post }) => {
        return [post, ...state]
    }),
    on(getPostsSuccess, (state, { posts }) => {
        return [...posts].sort((postOne, postTwo) => (postOne.created < postTwo.created ? 1 : -1))
    }),
    on(getPostsFailure, state => state)
)




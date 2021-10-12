import Post from "../models/post.model";
import * as postListActions from "../actions/post.actions";

export interface PostListState{
  posts: Post[]
}

const initialState:PostListState = {
  posts:[
    new Post('Chicken Burgers','I Love eating chicken burgers a Lot'),
    new Post('Dosai','Dosai is a Tamil Food and its for vegetarian so it is so tasty')
  ]
}
export function postListReducer(state:PostListState=initialState,action:postListActions.AddPost):PostListState{
  switch (action.type){
    case postListActions.Add_POST:
      return {
        ...state,
        posts:[...state.posts,action.payload]
      }
    default:
      return state;
  }


}

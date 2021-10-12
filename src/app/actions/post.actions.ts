import {Action} from "@ngrx/store";
import Post from "../models/post.model";

export const Add_POST = 'ADD_POST';


export class AddPost implements Action{
  readonly type=Add_POST;
  constructor(public payload:Post){}

}

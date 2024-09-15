import { createReducer, on } from "@ngrx/store";
import { PostActions, PostActionsAPI } from "./post.actions";
import { Post } from "../post.model";
import { Posts } from "../posts.model";
export const initialState: ReadonlyArray<any> = [];

export const postReducer=createReducer(
    initialState,
    on(PostActionsAPI.retreivePostList,(state,{posts})=>posts)
)
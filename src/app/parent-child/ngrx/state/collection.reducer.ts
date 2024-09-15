import { createReducer, on } from "@ngrx/store";
import { Post } from "../post.model";
import { PostActionsAPI, PostActions } from "./post.actions";


export const initialState: ReadonlyArray<String> = [];

export const collectionReducer=createReducer(
    initialState,
    on(PostActions.removePost,(state,{postId})=>state.filter((id) =>id!==postId)),
    on(PostActions.addPost, (state, { postId }) => {
            if (state.indexOf(postId) > -1)
                return state;

            return [...state, postId];
        })
)
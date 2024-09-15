import { createActionGroup, props } from "@ngrx/store";
import { Posts } from "../posts.model";
import { Post } from "../post.model";

export const PostActions=createActionGroup({
    source:'Post',
    events:{
        'Add Post':props<{postId:string}>(),
        'Remove Post':props<{postId:string}>()
    }
})

export const PostActionsAPI=createActionGroup({
    source:'Post',
    events:{
        'Retreive Post List':props<{posts:ReadonlyArray<any>}>()
    }
})
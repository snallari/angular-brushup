import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectPosts = createFeatureSelector <ReadonlyArray<any>>('posts');

export const selectCollectionState = createFeatureSelector<
  ReadonlyArray<string>
>('collection');

export const selectPostCollection = createSelector(
  selectPosts,
  selectCollectionState,
  (posts, collection) => {
    return collection.map((id) => posts.find((post) => post.id === id)!);
  }
);
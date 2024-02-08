import { CommentSortType } from '../../enums/CommentSortType.js';
import { ListingType } from '../../enums/ListingType.js';

export type GetCommentsRequest = {
  type_: ListingType;
  sort: CommentSortType;
  max_depth: number;
  page: number;
  limit: number;
  community_id: number;
  community_name: string;
  post_id: number;
  parent_id: number;
  saved_only: boolean;
  liked_only: boolean;
  disliked_only: boolean;
};

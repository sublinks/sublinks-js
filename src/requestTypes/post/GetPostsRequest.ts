import { ListingType, SortType } from '../../index.js';

export type GetPostsRequest = {
  type_?: ListingType;
  sort?: SortType;
  page?: number;
  limit?: number;
  community_id?: number;
  community_name?: string;
  saved_only?: boolean;
  disliked_only?: boolean;
  page_cursor?: string;
};

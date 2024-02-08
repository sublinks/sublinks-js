import { CommunityView } from '../../types/community/CommunityView.js';
import { PostView } from '../../types/post/PostView.js';

export type GetPostResponse = {
  post_view: PostView;
  community_view: CommunityView;
  moderators: [];
};

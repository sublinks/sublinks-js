import { SubscribedType } from '../../enums/SubscribedType.js';
import { Community } from '../community/Community.js';
import { Person } from '../user/Person.js';
import { Post } from './Post.js';
import { PostAggregates } from './PostAggregates.js';

export type PostView = {
  post: Post;
  creator: Person;
  community: Community;
  creator_banned_from_community: boolean;
  creator_is_moderator: boolean;
  creator_is_admin: boolean;
  counts: PostAggregates;
  subscribed: SubscribedType;
  saved: boolean;
  read: boolean;
  creator_blocked: boolean;
  my_vote: number;
  unread_comments: number;
};

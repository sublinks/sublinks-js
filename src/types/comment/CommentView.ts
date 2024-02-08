import { SubscribedType } from '../../enums/SubscribedType.js';
import { Community } from '../community/Community.js';
import { Post } from '../post/Post.js';
import { Person } from '../user/Person.js';
import { CommentAggregates } from './CommentAggregates.js';

export type CommentView = {
  creator: Person;
  post: Post;
  community: Community;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  creator_is_moderator: boolean;
  creator_is_admin: boolean;
  subscribed: SubscribedType;
  saved: boolean;
  creator_blocked: boolean;
  my_vote: number;
};

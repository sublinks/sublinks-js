import { CommentReplyRequest } from '../../requestTypes/comment/CommentReplyRequest.js';
import { Comment } from './Comment.js';
import { CommentAggregates } from './CommentAggregates.js';
import { Community } from '../community/Community.js';
import { Person } from '../user/Person.js';
import { Post } from '../post/Post.js';

export type CommentReplyView = {
  comment_reply: CommentReplyRequest;
  comment: Comment;
  creator: Person;
  post: Post;
  community: Community;
  receipient: Person;
  counts: CommentAggregates;
  creator_banned_from_community: boolean;
  creator_is_moderator: boolean;
  creator_is_admin: boolean;
  subscribed: boolean;
  saved: boolean;
  creator_blocked: boolean;
  my_vote: number;
};

import { CommentView } from '../../types/comment/CommentView.js';

export type RemoveCommentResponse = {
  comment_view: CommentView;
  recipient_ids: number[];
};

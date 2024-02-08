export type CommentReplyRequest = {
  id: number;
  receipient_id: number;
  comment_id: number;
  read: boolean;
  published: string;
};

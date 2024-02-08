export type AdminPurgeCommentRequest = {
  id: number;
  admin_person_id: number;
  post_id: number;
  reason: string;
  when_: string;
};

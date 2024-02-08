export type Comment = {
  id: number;
  creator_id: number;
  post_id: number;
  content: string;
  removed: boolean;
  published: string;
  updated: string;
  deleted: boolean;
  ap_id: string;
  local: boolean;
  path: string;
  distinguished: boolean;
  language_id: number;
};

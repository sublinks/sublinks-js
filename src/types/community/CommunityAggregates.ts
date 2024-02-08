export type CommunityAggregates = {
  id: number;
  community_id: number;
  subscribers: number;
  posts: number;
  comments: number;
  published: string;
  users_active_day: number;
  users_active_week: number;
  users_active_month: number;
  users_active_half_year: number;
  hot_rank: number;
};

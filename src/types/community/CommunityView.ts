import { SubscribedType } from '../../enums/SubscribedType.js';
import { Community } from './Community.js';
import { CommunityAggregates } from './CommunityAggregates.js';

export type CommunityView = {
  community: Community;
  subscribed: SubscribedType;
  blocked: boolean;
  counts: CommunityAggregates;
};

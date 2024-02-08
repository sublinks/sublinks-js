import { Person } from '../user/Person.js';
import { Community } from './Community.js';

export type CommunityFollowerView = {
  community: Community;
  follower: Person;
};

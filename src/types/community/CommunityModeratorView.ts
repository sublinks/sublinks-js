import { Person } from '../user/Person.js';
import { Community } from './Community.js';

export type CommunityModeratorView = {
  community: Community;
  moderator: Person;
};

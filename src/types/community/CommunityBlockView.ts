import { Person } from '../user/Person.js';
import { Community } from './Community.js';

export type CommunityBlockView = {
  community: Community;
  person: Person;
};

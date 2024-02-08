import { LocalUser } from './LocalUser.js';
import { Person } from './Person.js';
import { PersonAggregates } from './PersonAggregates.js';

export type LocalUserView = {
  local_user: LocalUser;
  person: Person;
  counts: PersonAggregates;
};

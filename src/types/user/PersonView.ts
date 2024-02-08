import { Person } from './Person.js';
import { PersonAggregates } from './PersonAggregates.js';

export type PersonView = {
  person: Person;
  counts: PersonAggregates;
  is_admin: boolean;
};

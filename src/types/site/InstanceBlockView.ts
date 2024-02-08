import { Person } from '../user/Person.js';
import { Instance } from './Instance.js';
import { Site } from './Site.js';

export type InstanceBlockView = {
  person: Person;
  instance: Instance;
  site: Site;
};

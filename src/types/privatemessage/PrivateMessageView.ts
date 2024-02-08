import { Person } from '../user/Person.js';
import { PrivateMessage } from './PrivateMessage.js';

export type PrivateMessageView = {
  private_message: PrivateMessage;
  creator: Person;
  recipient: Person;
};

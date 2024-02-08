import { CommunityBlockView } from '../community/CommunityBlockView.js';
import { CommunityFollowerView } from '../community/CommunityFollowerView.js';
import { CommunityModeratorView } from '../community/CommunityModeratorView.js';
import { InstanceBlockView } from '../site/InstanceBlockView.js';
import { LocalUserView } from './LocalUserView.js';
import { PersonBlockView } from './PersonBlockView.js';

export type MyUserInfo = {
  local_user_view: LocalUserView;
  follows: CommunityFollowerView[];
  moderates: CommunityModeratorView[];
  community_blocks: CommunityBlockView[];
  instance_blocks: InstanceBlockView[];
  person_blocks: PersonBlockView[];
  discussion_languages: number[];
};

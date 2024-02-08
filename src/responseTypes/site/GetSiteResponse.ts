/*
SiteView site_view,
    Collection<PersonView> admins,
    String version,
    MyUserInfo my_user,
    Collection<Long> discussion_languages,
    Collection<Language> all_languages,
    Collection<Tagline> taglines,
    Collection<CustomEmojiView> custom_emojis
    */

import { CustomEmojiView } from '../../types/customemoji/CustomEmojiView.js';
import { Language } from '../../types/site/Language.js';
import { SiteView } from '../../types/site/SiteView.js';
import { Tagline } from '../../types/site/Tagline.js';
import { MyUserInfo } from '../../types/user/MyUserInfo.js';
import { PersonView } from '../../types/user/PersonView.js';

export type GetSiteResponse = {
  site_view: SiteView;
  admins: PersonView[];
  version: string;
  my_user: MyUserInfo;
  discussion_languages: number[];
  all_languages: Language[];
  taglines: Tagline[];
  custom_emojis: CustomEmojiView[];
};

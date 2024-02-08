import { ListingType } from '../../enums/ListingType.js';
import { RegistrationMode } from '../../enums/RegistrationMode.js';

export type LocalSite = {
  id: number;
  site_id: number;
  site_setup: boolean;
  enable_downvotes: boolean;
  enable_nsfw: boolean;
  community_creation_admin_only: boolean;
  require_email_verification: boolean;
  application_question: string;
  private_instance: boolean;
  default_theme: string;
  default_post_listing_type: ListingType;
  legal_information: string;
  hide_modlog_mod_names: boolean;
  application_email_admins: boolean;
  slur_filter_regex: string;
  actor_name_max_length: number;
  federation_enabled: boolean;
  captcha_enabled: boolean;
  captcha_difficulty: string;
  published: string;
  updated: string;
  registration_mode: RegistrationMode;
  reports_email_admins: boolean;
};

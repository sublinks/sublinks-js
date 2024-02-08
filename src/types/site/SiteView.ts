import { LocalSite } from './LocalSite.js';
import { LocalSiteRateLimit } from './LocalSiteRateLimit.js';
import { Site } from './Site.js';
import { SiteAggregates } from './SiteAggregates.js';

export type SiteView = {
  site: Site;
  local_site: LocalSite;
  local_site_rate_limit: LocalSiteRateLimit;
  counts: SiteAggregates;
};

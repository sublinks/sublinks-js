// Main
export * from './client.js';

// Enums
export * from './enums/CommentSortType.js';
export * from './enums/ListingType.js';
export * from './enums/ModlogActionType.js';
export * from './enums/PostFeatureType.js';
export * from './enums/PostListingMode.js';
export * from './enums/RegistrationMode.js';
export * from './enums/SearchType.js';
export * from './enums/SortType.js';
export * from './enums/SubscribedType.js';

// Request Types
export * from './requestTypes/admin/AddAdminRequest.js';
export * from './requestTypes/admin/AdminPurgeCommentRequest.js';
export * from './requestTypes/comment/CommentReplyRequest.js';
export * from './requestTypes/post/GetPostRequest.js';
export * from './requestTypes/user/LoginRequest.js';

// Response Types
export * from './responseTypes/admin/AddAdminResponse.js';
export * from './responseTypes/comment/CommentReplyResponse.js';
export * from './responseTypes/post/GetPostResponse.js';
export * from './responseTypes/site/GetSiteResponse.js';
export * from './responseTypes/user/SuccessResponse.js';

// Types
export * from './types/comment/Comment.js';
export * from './types/comment/CommentAggregates.js';
export * from './types/comment/CommentReplyView.js';
export * from './types/community/Community.js';
export * from './types/community/CommunityAggregates.js';
export * from './types/community/CommunityBlockView.js';
export * from './types/community/CommunityFollowerView.js';
export * from './types/community/CommunityModeratorView.js';
export * from './types/community/CommunityView.js';
export * from './types/customemoji/CustomEmoji.js';
export * from './types/customemoji/CustomEmojiView.js';
export * from './types/post/Post.js';
export * from './types/post/PostAggregates.js';
export * from './types/post/PostView.js';
export * from './types/site/Instance.js';
export * from './types/site/InstanceBlockView.js';
export * from './types/site/Language.js';
export * from './types/site/LocalSite.js';
export * from './types/site/LocalSiteRateLimit.js';
export * from './types/site/Site.js';
export * from './types/site/SiteAggregates.js';
export * from './types/site/SiteView.js';
export * from './types/site/Tagline.js';
export * from './types/user/LocalUser.js';
export * from './types/user/LocalUserView.js';
export * from './types/user/MyUserInfo.js';
export * from './types/user/Person.js';
export * from './types/user/PersonAggregates.js';
export * from './types/user/PersonBlockView.js';
export * from './types/user/PersonView.js';

import { SublinksClient } from './client.js';

const client = new SublinksClient({
  instance: 'programming.dev',
});

main();

async function main() {
  console.log(client);
  console.log(await client.getSite());
}

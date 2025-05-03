// Trip.com affiliate ID
const AFFILIATE_ID = '15629775';

// Click tracking ID
const CLICK_ID = '9083409';

// Map of tracking domains for CJ
const CJ_TRACKING_DOMAINS = {
  anrdoezrs: 'https://www.anrdoezrs.net/click-9083409-',
  dpbolvw: 'https://www.dpbolvw.net/click-9083409-',
  jdoqocy: 'https://www.jdoqocy.com/click-9083409-',
  kqzyfj: 'https://www.kqzyfj.com/click-9083409-'
};

/**
 * Generate an affiliate link
 * @param source The source of the referral
 * @param category Optional category for the link
 * @param itemId Optional identifier for the specific item
 * @returns The affiliate link URL
 */
export const getAffiliateLink = (source: string, category?: string, itemId?: string): string => {
  let url = `${AFFILIATE_LINKS.QUIZ_TOOL}?utm_source=travelrecommender&utm_medium=referral&utm_campaign=${source}`;
  
  if (category) {
    url += `&utm_content=${category}`;
  }
  
  if (itemId) {
    url += `&utm_term=${itemId}`;
  }
  
  return url;
};

// Social media links
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/travel-recommender',
  twitter: 'https://twitter.com/travelrecommend',
  instagram: 'https://instagram.com/travel_recommender',
  pinterest: 'https://pinterest.com/travelrecommender'
};

export const AFFILIATE_LINKS = {
  QUIZ_TOOL: 'https://www.anrdoezrs.net/click-9083409-15629775',
  // Add more affiliate links as needed
};

export default {
  getAffiliateLink
};
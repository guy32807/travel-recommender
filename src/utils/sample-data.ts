export const sampleImages: Record<string, string> = {
  // Major cities
  paris: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop',
  london: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop',
  rome: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&auto=format&fit=crop',
  tokyo: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop',
  sydney: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&auto=format&fit=crop',
  newyork: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop',
  
  // Beach destinations
  bali: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&auto=format&fit=crop',
  santorini: 'https://images.unsplash.com/photo-1535563830494-9494a44e8efd?w=800&auto=format&fit=crop',
  maldives: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&auto=format&fit=crop',
  hawaii: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&auto=format&fit=crop',
  
  // Historic cities
  barcelona: 'https://images.unsplash.com/photo-1539037116277-4d60d88b7a7e?w=800&auto=format&fit=crop',
  marrakech: 'https://images.unsplash.com/photo-1548018560-c7963f4f48f5?w=800&auto=format&fit=crop',
  prague: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&auto=format&fit=crop',
  athens: 'https://images.unsplash.com/photo-1503152394-c571994fd383?w=800&auto=format&fit=crop',
  kyoto: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop',
  
  // Nature destinations
  alps: 'https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&auto=format&fit=crop',
  amazon: 'https://images.unsplash.com/photo-1628019015218-71c7c4558571?w=800&auto=format&fit=crop',
  grandcanyon: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800&auto=format&fit=crop',
  iceland: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&auto=format&fit=crop',
  newzealand: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&auto=format&fit=crop',
  
  // Additional destinations
  amsterdam: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&auto=format&fit=crop',
  bangkok: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&auto=format&fit=crop',
  istanbul: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&auto=format&fit=crop',
  rio: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&auto=format&fit=crop',
  singapore: 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=800&auto=format&fit=crop',
  dubai: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&auto=format&fit=crop',
  capetown: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop',
  vienna: 'https://images.unsplash.com/photo-1573599852326-2d4da0bbe613?w=800&auto=format&fit=crop'
};

// For slugs with special formatting
const slugMappings: Record<string, string> = {
  'new-york': 'newyork',
  'grand-canyon': 'grandcanyon',
  'new-zealand': 'newzealand',
  'cape-town': 'capetown',
  'amazonrainforest': 'amazon',
  'amazonjungle': 'amazon',
  'rio-de-janeiro': 'rio'
};

// Function to get the image for a destination by slug
export function getImageForDestination(slug: string): string {
  console.log(`Fetching image for slug: ${slug}`);
  
  // Step 1: Check direct match
  if (sampleImages[slug]) {
    return sampleImages[slug];
  }
  
  // Step 2: Check mappings
  if (slugMappings[slug]) {
    return sampleImages[slugMappings[slug]] || fallbackImage;
  }
  
  // Step 3: Try to normalize the slug
  const normalizedSlug = slug.replace(/[-\s]/g, '').toLowerCase();
  if (sampleImages[normalizedSlug]) {
    return sampleImages[normalizedSlug];
  }
  
  // Step 4: Check if slug contains any of our known destinations
  for (const key of Object.keys(sampleImages)) {
    if (slug.includes(key) || normalizedSlug.includes(key)) {
      return sampleImages[key];
    }
  }
  
  // Step 5: If all else fails, return the fallback image
  console.warn(`No image found for slug: ${slug}, using fallback image`);
  const result = fallbackImage;
  console.log(`Result for ${slug}: ${result}`);
  return result;
}

// Generic fallback image
export const fallbackImage = 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&auto=format&fit=crop';

// Blog post images
export const blogImages: Record<string, string> = {
  // Travel tips
  'packing-essentials': 'https://images.unsplash.com/photo-1553531889-56cc480ac5cb?w=800&auto=format&fit=crop',
  'budget-travel-tips': 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop',
  'solo-travel-safety': 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800&auto=format&fit=crop',
  'travel-photography': 'https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&auto=format&fit=crop',
  'sustainable-travel': 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&auto=format&fit=crop',
  
  // Destination guides
  'hidden-gems-paris': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop',
  'tokyo-neighborhoods': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop',
  'new-york-winter': 'https://images.unsplash.com/photo-1543716091-a840c05249ec?w=800&auto=format&fit=crop',
  'bali-beaches': 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&auto=format&fit=crop',
  'barcelona-food': 'https://images.unsplash.com/photo-1539037116277-4d60d88b7a7e?w=800&auto=format&fit=crop',
  
  // Travel experiences
  'safari-experience': 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&auto=format&fit=crop',
  'northern-lights': 'https://images.unsplash.com/photo-1483086431886-3590a88317fe?w=800&auto=format&fit=crop',
  'road-trip-adventure': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&auto=format&fit=crop',
  'hiking-himalayas': 'https://images.unsplash.com/photo-1518009840326-ec1846876787?w=800&auto=format&fit=crop',
  'island-hopping': 'https://images.unsplash.com/photo-1468413253725-0d5181091126?w=800&auto=format&fit=crop'
};

// Blog category images
export const blogCategoryImages: Record<string, string> = {
  'travel-tips': 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&auto=format&fit=crop',
  'destination-guides': 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=800&auto=format&fit=crop',
  'travel-experiences': 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format&fit=crop',
  'food-and-cuisine': 'https://images.unsplash.com/photo-1503764654157-72d979d9af2f?w=800&auto=format&fit=crop',
  'culture-and-history': 'https://images.unsplash.com/photo-1491156855053-9cdff72c7f85?w=800&auto=format&fit=crop'
};

// Function to get image for blog post
export function getBlogImage(slug: string): string {
  // Direct match
  if (blogImages[slug]) {
    return blogImages[slug];
  }
  
  // Normalize slug
  const normalizedSlug = slug.replace(/[-\s]/g, '').toLowerCase();
  if (blogImages[normalizedSlug]) {
    return blogImages[normalizedSlug];
  }
  
  // Check if slug contains any known blog post slugs
  for (const key of Object.keys(blogImages)) {
    if (slug.includes(key) || normalizedSlug.includes(key)) {
      return blogImages[key];
    }
  }
  
  // Use blog category image if possible
  const categories = ['travel-tips', 'destination-guides', 'travel-experiences', 'food-and-cuisine', 'culture-and-history'];
  for (const category of categories) {
    if (slug.includes(category)) {
      return blogCategoryImages[category];
    }
  }
  
  // Fallback
  return blogFallbackImage;
}

// Blog fallback image
export const blogFallbackImage = 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&auto=format&fit=crop';

// Homepage hero image
export const homeHeroImage = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&auto=format&fit=crop';

// Featured destinations for homepage
export const featuredDestinationsImages: Record<string, string> = {
  paris: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop',
  bali: 'https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&auto=format&fit=crop',
  tokyo: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&auto=format&fit=crop',
  newyork: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop',
};

// Featured experiences for homepage
export const featuredExperiencesImages: Record<string, string> = {
  'beach-vacation': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop',
  'city-break': 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&auto=format&fit=crop',
  'mountain-hiking': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop',
  'food-tour': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
};

// Homepage testimonials background
export const testimonialsBgImage = 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&auto=format&fit=crop&blur=4';

// Function to get a homepage featured image
export function getHomepageImage(type: 'hero' | 'testimonials'): string {
  switch (type) {
    case 'hero':
      return homeHeroImage;
    case 'testimonials':
      return testimonialsBgImage;
    default:
      return fallbackImage;
  }
}

// Function to get featured destination image
export function getFeaturedDestinationImage(slug: string): string {
  return featuredDestinationsImages[slug] || fallbackImage;
}

// Function to get featured experience image
export function getFeaturedExperienceImage(slug: string): string {
  return featuredExperiencesImages[slug] || fallbackImage;
}
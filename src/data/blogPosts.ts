export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageAlt: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
  readingTime: number; // in minutes
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'sustainable-travel-tips',
    title: 'Top 15 Sustainable Travel Tips for Eco-Conscious Travelers',
    slug: 'sustainable-travel-tips',
    excerpt: 'Discover how to minimize your environmental impact while exploring the world with these practical sustainable travel tips and eco-friendly destination recommendations.',
    content: `
      <h2>Why Sustainable Travel Matters</h2>
      <p>As global tourism continues to grow, so does its environmental impact. The travel industry accounts for approximately 8% of global carbon emissions, with air travel being a significant contributor. However, this doesn't mean we should stop exploring our beautiful planet. Instead, we can adopt sustainable travel practices that minimize our environmental footprint while supporting local communities.</p>
      
      <p>Sustainable travel, also known as ecotourism or responsible travel, is about making smarter choices that have a positive impact on the environment, communities, and economies of the destinations we visit.</p>
      
      <h2>15 Practical Sustainable Travel Tips</h2>
      
      <h3>1. Choose Eco-Friendly Transportation</h3>
      <p>Whenever possible, opt for direct flights as takeoffs and landings use the most fuel. Consider trains for shorter distances, as rail travel has a significantly lower carbon footprint than flying. Once at your destination, use public transportation, rent bicycles, or explore on foot.</p>
      
      <h3>2. Pack Light and Right</h3>
      <p>Lighter planes use less fuel, so pack only what you need. Bring a reusable water bottle, shopping bag, bamboo utensils, and other sustainable travel essentials to avoid single-use plastics during your journey.</p>
    `,
    imageUrl: '/images/blog/sustainable-travel.jpg',
    imageAlt: 'Person hiking on a mountain trail with sustainable travel gear',
    author: 'Emma Rodriguez',
    publishedAt: new Date('2023-06-15'),
    updatedAt: new Date('2023-09-01'),
    readingTime: 9,
    tags: ['sustainable travel', 'ecotourism', 'travel tips', 'green travel', 'eco-friendly destinations'],
    featured: true
  },
  {
    id: 'budget-travel-asia',
    title: 'Ultimate Guide to Budget Travel in Southeast Asia',
    slug: 'budget-travel-southeast-asia',
    excerpt: 'Learn how to explore the vibrant countries of Southeast Asia on a shoestring budget with insider tips on accommodation, food, transportation, and must-see destinations.',
    content: `
      <h2>Why Southeast Asia is Perfect for Budget Travelers</h2>
      <p>Southeast Asia has long been a paradise for budget travelers, offering an incredible blend of cultures, cuisines, landscapes, and experiences at a fraction of the cost you'd pay in Western countries. From the bustling streets of Bangkok to the serene rice terraces of Bali, this region provides unforgettable adventures without breaking the bank.</p>
      
      <p>With careful planning and local knowledge, you can comfortably travel through countries like Thailand, Vietnam, Cambodia, and Indonesia for as little as $30-50 per day, including accommodation, food, local transportation, and activities.</p>
      
      <h2>Planning Your Southeast Asia Budget Adventure</h2>
      
      <h3>Best Time to Visit</h3>
      <p>The ideal time to visit Southeast Asia is during the dry season, which generally runs from November to April in most countries. However, traveling during the shoulder seasons (May-June or September-October) can offer significant savings on accommodation and fewer crowds while still providing reasonably good weather.</p>
    `,
    imageUrl: '/images/blog/southeast-asia-travel.jpg',
    imageAlt: 'Backpacker walking along a beach in Thailand with longtail boats',
    author: 'Alex Johnson',
    publishedAt: new Date('2023-07-22'),
    updatedAt: new Date('2023-08-15'),
    readingTime: 12,
    tags: ['budget travel', 'southeast asia', 'backpacking', 'travel tips', 'thailand', 'vietnam', 'cambodia'],
    featured: true
  }
];

/**
 * Get all blog posts
 */
export const getAllBlogPosts = (): BlogPost[] => {
  return blogPosts;
};

/**
 * Get a blog post by its slug
 */
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

/**
 * Get latest blog posts
 */
export const getLatestBlogPosts = (limit: number = 5): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, limit);
};

/**
 * Get related blog posts based on tags
 */
export const getRelatedPosts = (postId: string, limit: number = 3): BlogPost[] => {
  const currentPost = blogPosts.find(post => post.id === postId);
  
  if (!currentPost) {
    return [];
  }
  
  // Find posts with matching tags
  const relatedPosts = blogPosts
    .filter(post => post.id !== postId)
    .map(post => {
      const matchingTags = post.tags.filter(tag => 
        currentPost.tags.includes(tag)
      ).length;
      return { ...post, relevance: matchingTags };
    })
    .filter(post => post.relevance > 0)
    .sort((a, b) => b.relevance - a.relevance);
    
  // If we don't have enough related posts by tags, add recent posts
  if (relatedPosts.length < limit) {
    const recentPosts = getLatestBlogPosts()
      .filter(post => 
        post.id !== postId && 
        !relatedPosts.some(rp => rp.id === post.id)
      )
      .slice(0, limit - relatedPosts.length);
      
    return [...relatedPosts, ...recentPosts].slice(0, limit);
  }
  
  return relatedPosts.slice(0, limit);
};

export default blogPosts;
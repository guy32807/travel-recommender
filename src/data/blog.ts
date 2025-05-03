export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  readTime: number;
  imageUrl?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'packing-essentials',
    title: 'Essential Packing Guide for Every Type of Trip',
    date: '2025-03-15',
    author: 'Jane Smith',
    category: 'Travel Tips',
    tags: ['packing', 'essentials', 'luggage', 'organization'],
    excerpt: 'Learn how to pack efficiently for any trip, from weekend getaways to long-term adventures.',
    content: `
      <p>Packing for a trip can be stressful, but with the right approach, you can make sure you have everything you need without overpacking.</p>
      
      <h2>Start with the Essentials</h2>
      <p>Always begin with items you can't travel without: passport, ID, medications, phone, chargers, and payment methods.</p>
      
      <h2>The 5-4-3-2-1 Rule for Clothes</h2>
      <p>For a week-long trip, try the 5-4-3-2-1 rule: 5 pairs of socks and underwear, 4 tops, 3 bottoms, 2 pairs of shoes, and 1 jacket.</p>
      
      <h2>Toiletries Tips</h2>
      <p>Use travel-sized containers and only bring what you'll actually use. Many hotels provide basic toiletries.</p>
      
      <h2>Electronics and Entertainment</h2>
      <p>Consider what you'll really need. A smartphone can replace many gadgets like cameras and books.</p>
      
      <h2>Destination-Specific Items</h2>
      <p>Research your destination's weather, cultural norms, and activities to pack appropriately.</p>
      
      <h2>Packing Methods</h2>
      <p>Rolling clothes saves space and reduces wrinkles. Packing cubes help keep everything organized.</p>
      
      <h2>Final Tips</h2>
      <p>Make a packing list beforehand, and remember the "half rule" - lay out what you think you need, then pack half of it.</p>
    `,
    readTime: 8
  },
  {
    id: '2',
    slug: 'hidden-gems-paris',
    title: 'Paris Beyond the Eiffel Tower: Hidden Gems to Explore',
    date: '2025-03-10',
    author: 'Marc Dubois',
    category: 'Destination Guides',
    tags: ['paris', 'france', 'hidden gems', 'local experience'],
    excerpt: 'Discover the lesser-known attractions and neighborhoods that will make your Paris trip extraordinary.',
    content: `
      <p>Paris is known for its iconic landmarks like the Eiffel Tower and Louvre, but the city offers so much more for travelers willing to venture off the beaten path.</p>
      
      <h2>Canal Saint-Martin</h2>
      <p>This picturesque canal in northeastern Paris is lined with hip boutiques, cozy cafes, and is perfect for a leisurely stroll away from the crowds.</p>
      
      <h2>Passage des Panoramas</h2>
      <p>The oldest covered passage in Paris, dating back to 1800, offers a glimpse into historic Paris with its charming shops and restaurants.</p>
      
      <h2>Musée de la Vie Romantique</h2>
      <p>This small museum housed in a 19th-century mansion provides an intimate look at Romantic era art and literature.</p>
      
      <h2>La Butte aux Cailles</h2>
      <p>This quaint village-like neighborhood features street art, charming houses, and local bars where few tourists venture.</p>
      
      <h2>Parc des Buttes-Chaumont</h2>
      <p>A dramatic park with cliffs, waterfalls, and a temple offering panoramic views of the city without the crowds.</p>
      
      <h2>Marché d'Aligre</h2>
      <p>Experience local life at this authentic market where Parisians shop for fresh produce, cheese, and baked goods.</p>
      
      <h2>Rue Crémieux</h2>
      <p>This colorful street with pastel-painted houses feels more like Notting Hill than Paris and makes for perfect photos.</p>
    `,
    readTime: 10
  },
  // Add a third post to enable related posts
  {
    id: '3',
    slug: 'budget-travel-tips',
    title: 'How to Travel on a Budget Without Sacrificing Experience',
    date: '2025-03-05',
    author: 'Sarah Johnson',
    category: 'Travel Tips',
    tags: ['budget', 'backpacking', 'affordable', 'money-saving'],
    excerpt: 'Discover strategies for seeing the world on a limited budget while still having amazing experiences.',
    content: `
      <p>Traveling on a budget doesn't mean you have to miss out on amazing experiences. With careful planning and smart choices, you can explore the world without breaking the bank.</p>
      
      <h2>Travel in Shoulder Season</h2>
      <p>Visiting destinations just before or after peak season often means significantly lower prices on flights and accommodation while still enjoying good weather.</p>
      
      <h2>Use Public Transportation</h2>
      <p>Skip the taxis and rental cars. Use local buses, trains, and metros to save money and experience the city like a local.</p>
      
      <h2>Stay in Budget Accommodations</h2>
      <p>Consider hostels, guesthouses, or apartment rentals instead of hotels. Many budget options now offer private rooms and great amenities.</p>
      
      <h2>Eat Like a Local</h2>
      <p>Street food and local eateries often provide the most authentic and affordable dining experiences. Avoid restaurants in tourist areas.</p>
      
      <h2>Free Activities and Attractions</h2>
      <p>Many cities offer free walking tours, museum days, and public parks and landmarks that cost nothing to enjoy.</p>
      
      <h2>Travel Slow</h2>
      <p>Spending more time in fewer places reduces transportation costs and gives you a deeper experience of each destination.</p>
      
      <h2>Use Travel Rewards</h2>
      <p>Credit card points, frequent flyer miles, and loyalty programs can significantly reduce travel costs when used strategically.</p>
    `,
    readTime: 7
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null;
}

export function getRelatedPosts(post: BlogPost, limit: number = 3): BlogPost[] {
  // Find posts with the same category or tags
  const relatedByCategory = blogPosts.filter(p => 
    p.id !== post.id && p.category.toLowerCase() === post.category.toLowerCase()
  );
  
  const relatedByTags = blogPosts.filter(p => 
    p.id !== post.id && 
    p.category.toLowerCase() !== post.category.toLowerCase() && 
    p.tags.some(tag => post.tags.includes(tag))
  );
  
  // Combine and limit results
  return [...relatedByCategory, ...relatedByTags].slice(0, limit);
}
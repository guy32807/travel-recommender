import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ensureString } from '../utils/i18n-helpers';
import { getAffiliateLink } from '../utils/affiliate-links';
import SEO from '../components/SEO';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

// Define blog post type
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
  author: string;
  featuredImage: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: string;
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '10 Must-Visit Destinations in Europe',
    slug: 'must-visit-destinations-europe',
    date: '2023-08-15',
    author: 'Sarah Johnson',
    featuredImage: '/images/blog/europe-destinations.jpg',
    excerpt: 'Discover the most stunning destinations across Europe that should be on every traveler\'s bucket list.',
    content: `
<p>Europe is a continent filled with diverse cultures, stunning landscapes, and rich history. From the sun-soaked beaches of the Mediterranean to the snow-capped Alps, there's something for every type of traveler.</p>

<h2>1. Barcelona, Spain</h2>
<p>Famous for its unique architecture designed by Antoni Gaudí, Barcelona offers a perfect blend of city life and beach relaxation. The Sagrada Família, Park Güell, and the historic Gothic Quarter are must-visit attractions.</p>

<h2>2. Santorini, Greece</h2>
<p>With its iconic white-washed buildings and blue domes perched on cliffs overlooking the turquoise Aegean Sea, Santorini is the epitome of a Greek island paradise.</p>

<h2>3. Paris, France</h2>
<p>The City of Light lives up to its romantic reputation with iconic landmarks like the Eiffel Tower, Louvre Museum, and charming cafés along the Seine River.</p>

<h2>4. Rome, Italy</h2>
<p>Step back in time as you explore the ancient ruins of the Colosseum and Roman Forum, toss a coin in the Trevi Fountain, and marvel at the artistry of the Vatican Museums.</p>

<h2>5. Prague, Czech Republic</h2>
<p>The fairy-tale city of Prague enchants visitors with its well-preserved medieval architecture, Prague Castle, and the picturesque Charles Bridge spanning the Vltava River.</p>

<h2>6. Amsterdam, Netherlands</h2>
<p>Known for its artistic heritage, elaborate canal system, and narrow houses, Amsterdam offers a laid-back atmosphere with world-class museums like the Van Gogh Museum and Rijksmuseum.</p>

<h2>7. Dubrovnik, Croatia</h2>
<p>Walk along the ancient city walls of this stunning coastal city with its distinctive red-roofed buildings and crystal-clear Adriatic waters. Game of Thrones fans will recognize it as King's Landing.</p>

<h2>8. Budapest, Hungary</h2>
<p>The "Pearl of the Danube" impresses with its grand architecture, thermal baths, and vibrant nightlife scene, especially in the famous ruin bars of the Jewish Quarter.</p>

<h2>9. Swiss Alps, Switzerland</h2>
<p>Whether you're an adventure seeker or just want to enjoy breathtaking mountain scenery, the Swiss Alps offer year-round activities, from skiing in winter to hiking in summer.</p>

<h2>10. Edinburgh, Scotland</h2>
<p>Scotland's capital city combines medieval charm in its Old Town with Georgian elegance in the New Town. Edinburgh Castle dominates the skyline, and the city hosts the world's largest arts festival each August.</p>
    `,
    tags: ['Europe', 'Travel Guide', 'Destinations', 'Bucket List'],
    category: 'Destinations'
  },
  {
    id: 2,
    title: 'How to Travel on a Budget: Tips and Tricks',
    slug: 'travel-on-budget-tips',
    date: '2023-07-22',
    author: 'Mark Anderson',
    featuredImage: '/images/blog/budget-travel.jpg',
    excerpt: 'Learn how to see the world without breaking the bank with these practical budget travel tips.',
    content: `
<p>Traveling doesn't have to be expensive. With careful planning and a few insider tips, you can explore the world without emptying your bank account.</p>

<h2>Plan Ahead, But Stay Flexible</h2>
<p>Booking flights and accommodations in advance usually means better prices, but keeping your itinerary somewhat flexible allows you to take advantage of unexpected deals and opportunities.</p>

<h2>Travel During Off-Peak Seasons</h2>
<p>Avoiding peak tourist seasons not only saves you money on flights and accommodations but also means fewer crowds and a more authentic experience.</p>

<h2>Use Flight Comparison Tools</h2>
<p>Sites like Skyscanner, Google Flights, and Kayak can help you find the best deals on flights. Being flexible with your departure dates can yield significant savings.</p>

<h2>Consider Alternative Accommodations</h2>
<p>Hotels aren't your only option. Hostels, guesthouses, vacation rentals, and home exchanges offer comfortable stays at a fraction of the cost.</p>

<h2>Eat Where the Locals Eat</h2>
<p>Not only will you enjoy more authentic cuisine, but you'll also avoid tourist traps with inflated prices. Street food and local markets are often delicious and budget-friendly options.</p>

<h2>Use Public Transportation</h2>
<p>Taxis and rental cars can quickly eat into your travel budget. Public transportation is usually much more affordable and gives you a glimpse into local life.</p>

<h2>Take Advantage of Free Activities</h2>
<p>Many destinations offer free walking tours, museum days, parks, and cultural events. Do your research before arriving to plan around these opportunities.</p>

<h2>Travel Light</h2>
<p>Avoiding checked baggage fees can save you a significant amount, especially on budget airlines where these fees can sometimes exceed the cost of the ticket itself.</p>

<h2>Get a Local SIM Card</h2>
<p>International roaming charges can add up quickly. Purchasing a local SIM card gives you affordable data access for navigation, translation, and communication.</p>

<h2>Use Travel Rewards and Points</h2>
<p>Credit cards with travel rewards, airline miles, and hotel loyalty programs can lead to free or discounted travel opportunities if used strategically.</p>
    `,
    tags: ['Budget Travel', 'Money Saving', 'Travel Tips', 'Backpacking'],
    category: 'Travel Tips'
  }
];

// Get blog post by slug
const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

// Get related posts
const getRelatedPosts = (currentPost: BlogPost): BlogPost[] => {
  // Find posts with similar tags or in the same category
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, 3); // Limit to 3 related posts
};

// Styled components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const BlogHeader = styled.div`
  margin-bottom: 2rem;
`;

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.textLight};
  margin-bottom: 1rem;
  flex-wrap: wrap;
  
  span {
    margin-right: 1.5rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.5rem;
    }
  }
`;

const FeaturedImage = styled.div`
  margin-bottom: 2rem;
  border-radius: ${props => props.theme.borderRadius.medium};
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div`
  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }
  
  h3 {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem;
  }
  
  p {
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
  
  img {
    max-width: 100%;
    border-radius: ${props => props.theme.borderRadius.small};
    margin: 1.5rem 0;
  }
  
  blockquote {
    border-left: 4px solid ${props => props.theme.colors.primary};
    padding-left: 1rem;
    margin-left: 0;
    color: ${props => props.theme.colors.textLight};
    font-style: italic;
  }
  
  .affiliate-box {
    background-color: ${props => props.theme.colors.primaryLight};
    border-radius: ${props => props.theme.borderRadius.medium};
    padding: 1.5rem;
    margin: 2rem 0;
    
    h3 {
      margin-top: 0;
      margin-bottom: 1rem;
      font-size: 1.4rem;
    }
    
    p {
      margin-bottom: 1rem;
    }
    
    a {
      display: inline-block;
      background-color: ${props => props.theme.colors.primary};
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: ${props => props.theme.borderRadius.small};
      text-decoration: none;
      font-weight: 600;
      margin-top: 1rem;
      transition: background-color ${props => props.theme.transitions.fast};
      
      &:hover {
        background-color: ${props => props.theme.colors.primaryDark};
      }
    }
  }
`;

const Sidebar = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    order: -1;
  }
`;

const SidebarSection = styled(Card)`
  margin-bottom: 2rem;
`;

const SidebarTitle = styled.h3`
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  padding-bottom: 0.75rem;
`;

const BlogTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem 0;
`;

const BlogTag = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const SocialShareSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  button {
    padding: 0.5rem;
    border-radius: ${props => props.theme.borderRadius.small};
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 1px solid ${props => props.theme.colors.border};
    cursor: pointer;
    transition: ${props => props.theme.transitions.short};
    
    &:hover {
      background-color: ${props => props.theme.colors.backgroundAlt};
    }
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const AffiliateContainer = styled.div`
  background-color: ${props => props.theme.colors.primaryLight};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 1.5rem;
  margin: 2rem 0;
  
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }
  
  p {
    margin-bottom: 1rem;
  }
  
  a {
    display: inline-block;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: ${props => props.theme.borderRadius.small};
    text-decoration: none;
    font-weight: 600;
    margin-top: 1rem;
    transition: background-color ${props => props.theme.transitions.fast};
    
    &:hover {
      background-color: ${props => props.theme.colors.primaryDark};
    }
  }
`;

const RelatedPostsTitle = styled.h2`
  font-size: 1.8rem;
  margin: 3rem 0 1.5rem;
  text-align: center;
`;

const RelatedPostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const RelatedPostCard = styled(Card)`
  padding: 0;
  overflow: hidden;
`;

const RelatedPostImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const RelatedPostContent = styled.div`
  padding: 1.5rem;
`;

const RelatedPostTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 0.5rem;
`;

const RelatedPostExcerpt = styled.p`
  color: ${props => props.theme.colors.textLight};
  font-size: 0.9rem;
  margin-bottom: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// Main component
const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    if (slug) {
      const foundPost = getBlogPostBySlug(slug);
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedPosts(foundPost));
      } else {
        navigate('/not-found');
      }
    }
  }, [slug, navigate]);
  
  if (!post) {
    return <div>Loading...</div>;
  }
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Generate affiliate links for the content
  const processContentWithAffiliates = () => {
    // This is a simple implementation. In a real app, you might use a more sophisticated approach
    const affiliateBox = `
      <div class="affiliate-box">
        <h3>${ensureString(t, 'blog.planYourTrip', 'Plan Your Trip')}</h3>
        <p>${ensureString(t, 'blog.affiliateMessage', 'Ready to experience this destination? We\'ve partnered with top travel providers to offer you the best deals.')}</p>
        <a href="${getAffiliateLink('blog_post', post.id.toString(), post.title)}" target="_blank" rel="noopener noreferrer">
          ${ensureString(t, 'blog.bookNowButton', 'Check Prices & Availability')}
        </a>
      </div>
    `;
    
    // Insert affiliate box after the second paragraph
    const parts = post.content.split('</p>');
    if (parts.length > 2) {
      parts.splice(2, 0, affiliateBox);
    } else {
      parts.push(affiliateBox);
    }
    
    return parts.join('</p>');
  };
  
  return (
    <>
      <SEO 
        title={`${post.title} | Travel Recommender Blog`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        image={post.featuredImage}
        url={`/blog/${post.slug}`}
      />
      
      <Container>
        <BlogHeader>
          <BlogTitle>{post.title}</BlogTitle>
          <BlogMeta>
            <span>{post.author}</span>
            <span>{formatDate(post.date)}</span>
            <span>{post.category}</span>
          </BlogMeta>
          <BlogTags>
            {post.tags.map((tag, index) => (
              <BlogTag key={index}>{tag}</BlogTag>
            ))}
          </BlogTags>
        </BlogHeader>
        
        <FeaturedImage>
          <img src={post.featuredImage} alt={post.title} />
        </FeaturedImage>
        
        <ContentGrid>
          <MainContent dangerouslySetInnerHTML={{ __html: processContentWithAffiliates() }} />
          
          <Sidebar>
            <SidebarSection>
              <SidebarTitle>{ensureString(t, 'blog.sidebar.about', 'About the Author')}</SidebarTitle>
              <p>{ensureString(t, 'blog.sidebar.authorBio', `${post.author} is an experienced travel writer with a passion for exploring new destinations and sharing travel tips.`)}</p>
            </SidebarSection>
            
            <SidebarSection>
              <SidebarTitle>{ensureString(t, 'blog.sidebar.subscribe', 'Stay Updated')}</SidebarTitle>
              <p>{ensureString(t, 'blog.sidebar.subscribeText', 'Subscribe to our newsletter for the latest travel tips and destination guides.')}</p>
              <Button $fullWidth>
                {ensureString(t, 'blog.sidebar.subscribeButton', 'Subscribe')}
              </Button>
            </SidebarSection>
            
            <AffiliateContainer>
              <h3>{ensureString(t, 'blog.sidebar.deals', 'Exclusive Travel Deals')}</h3>
              <p>{ensureString(t, 'blog.sidebar.dealsText', 'Get up to 30% off on selected destinations when you book through our partners.')}</p>
              <a 
                href={getAffiliateLink('blog_sidebar', post.id.toString(), post.title)} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {ensureString(t, 'blog.sidebar.viewDealsButton', 'View Deals')}
              </a>
            </AffiliateContainer>
          </Sidebar>
        </ContentGrid>
        
        {relatedPosts.length > 0 && (
          <>
            <RelatedPostsTitle>
              {ensureString(t, 'blog.relatedPosts', 'You May Also Like')}
            </RelatedPostsTitle>
            <RelatedPostsGrid>
              {relatedPosts.map(relatedPost => (
                <RelatedPostCard key={relatedPost.id}>
                  <Link to={`/blog/${relatedPost.slug}`}>
                    <RelatedPostImage>
                      <img src={relatedPost.featuredImage} alt={relatedPost.title} />
                    </RelatedPostImage>
                    <RelatedPostContent>
                      <RelatedPostTitle>{relatedPost.title}</RelatedPostTitle>
                      <RelatedPostExcerpt>{relatedPost.excerpt}</RelatedPostExcerpt>
                    </RelatedPostContent>
                  </Link>
                </RelatedPostCard>
              ))}
            </RelatedPostsGrid>
          </>
        )}
      </Container>
    </>
  );
};

export default BlogPost;
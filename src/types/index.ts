export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  continent: string;
  description: string;
  excerpt: string;
  imageUrl: string;
  imageAlt: string;
  rating: number;
  priceLevel: 1 | 2 | 3 | 4 | 5; // 1 = budget, 5 = luxury
  bestTimeToVisit: string;
  featured: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  tags: string[];
}

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
  readingTime: number;
  tags: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  text: string;
  rating: number;
  date: Date;
}
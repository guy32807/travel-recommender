// Define Destination type
export interface Destination {
  id: number;
  name: string;
  slug: string;
  country: string;
  continent: string;
  region?: string; // Added optional region property
  imageUrl: string;
  imageAlt: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  activities?: string[]; // Added optional activities property
  tags: string[];
  rating: number;
  bestTimeToVisit?: string;
  budget?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

// Sample destinations data
const destinations: Destination[] = [
  {
    id: 1,
    name: 'Santorini',
    slug: 'santorini-greece',
    country: 'Greece',
    continent: 'Europe',
    region: 'Cyclades Islands',
    imageUrl: '/images/destinations/santorini.jpg',
    imageAlt: 'White buildings with blue domes overlooking the Aegean Sea in Santorini, Greece',
    description: 'Famous for its stunning sunsets, white-washed buildings, and blue domes that contrast against the deep blue Aegean Sea.',
    longDescription: 'Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its two principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.',
    highlights: [
      'Watch the sunset from Oia',
      'Visit the ancient ruins of Akrotiri',
      'Swim at Red Beach and Black Beach',
      'Take a caldera cruise',
      'Sample local wines at a vineyard'
    ],
    activities: [
      'Sailing tours around the caldera',
      'Wine tasting at local vineyards',
      'Exploring volcanic hot springs',
      'Hiking from Fira to Oia',
      'Scuba diving and snorkeling',
      'Relaxing on unique volcanic beaches'
    ],
    tags: ['Island', 'Romantic', 'Beach', 'Scenic', 'Cultural'],
    rating: 4.8,
    bestTimeToVisit: 'April to October',
    budget: 'High',
    coordinates: {
      lat: 36.3932,
      lng: 25.4615
    }
  },
  {
    id: 2,
    name: 'Kyoto',
    slug: 'kyoto-japan',
    country: 'Japan',
    continent: 'Asia',
    region: 'Kansai',
    imageUrl: '/images/destinations/kyoto.jpg',
    imageAlt: 'Traditional Japanese temple with cherry blossoms in Kyoto, Japan',
    description: 'Japan\'s spiritual heart, famous for its numerous temples, shrines, gardens, traditional wooden houses, and geisha district.',
    longDescription: 'Kyoto, once the capital of Japan, is a city on the island of Honshu. It\'s famous for its numerous classical Buddhist temples, as well as gardens, imperial palaces, Shinto shrines and traditional wooden houses. It\'s also known for formal traditions such as kaiseki dining, consisting of multiple courses of precise dishes, and geisha, female entertainers often found in the Gion district.',
    highlights: [
      'Visit Fushimi Inari Shrine with its thousands of torii gates',
      'Explore the bamboo groves of Arashiyama',
      'See the golden pavilion of Kinkaku-ji',
      'Wander through the historic Gion district',
      'Experience a traditional tea ceremony'
    ],
    activities: [
      'Participate in a traditional tea ceremony',
      'Rent a kimono for a day of sightseeing',
      'Take a cooking class to learn Kyoto cuisine',
      'Attend a geisha performance',
      'Meditate at a Zen temple',
      'Bike along the Kamo River'
    ],
    tags: ['Cultural', 'Historic', 'Temples', 'Gardens', 'Traditional'],
    rating: 4.7,
    bestTimeToVisit: 'March-May (cherry blossoms) and October-November (fall colors)',
    budget: 'Medium to High',
    coordinates: {
      lat: 35.0116,
      lng: 135.7681
    }
  },
  {
    id: 3,
    name: 'Bali',
    slug: 'bali-indonesia',
    country: 'Indonesia',
    continent: 'Asia',
    region: 'Lesser Sunda Islands',
    imageUrl: '/images/destinations/bali.jpg',
    imageAlt: 'Terraced rice fields and traditional temple in Bali, Indonesia',
    description: 'A tropical paradise known for its lush rice terraces, impressive temples, vibrant coral reefs, and yoga retreats.',
    longDescription: 'Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.',
    highlights: [
      'Explore the Tegallalang Rice Terraces',
      'Visit the sacred Uluwatu Temple',
      'Watch traditional Balinese dance',
      'Relax on Kuta or Seminyak beach',
      'See the sacred monkey forest in Ubud'
    ],
    activities: [
      'Surfing in Kuta or Uluwatu',
      'Yoga and meditation retreats in Ubud',
      'White water rafting on the Ayung River',
      'Shopping for handcrafted souvenirs',
      'Learning traditional Balinese cooking',
      'Getting a traditional Balinese massage'
    ],
    tags: ['Beach', 'Cultural', 'Nature', 'Relaxation', 'Adventure'],
    rating: 4.6,
    bestTimeToVisit: 'April to October (dry season)',
    budget: 'Low to Medium',
    coordinates: {
      lat: -8.3405,
      lng: 115.0920
    }
  },
  {
    id: 4,
    name: 'Paris',
    slug: 'paris-france',
    country: 'France',
    continent: 'Europe',
    region: 'Île-de-France',
    imageUrl: '/images/destinations/paris.jpg',
    imageAlt: 'Eiffel Tower and Seine River in Paris, France',
    description: 'The City of Light renowned for its landmarks, museums, gastronomy, and culture.',
    longDescription: 'Paris, France\'s capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré.',
    highlights: [
      'Visit the iconic Eiffel Tower',
      'Explore the Louvre Museum',
      'Stroll along the Champs-Élysées',
      'See Notre-Dame Cathedral',
      'Take a Seine River cruise'
    ],
    activities: [
      'Guided tour of the Louvre Museum',
      'Climbing to the top of the Eiffel Tower',
      'Wine tasting in a Parisian wine cellar',
      'Seine River dinner cruise',
      'Shopping in Le Marais',
      'Pastry and baking classes',
      'Day trip to Versailles Palace'
    ],
    tags: ['City', 'Cultural', 'Historic', 'Romantic', 'Food'],
    rating: 4.7,
    bestTimeToVisit: 'April to October',
    budget: 'High',
    coordinates: {
      lat: 48.8566,
      lng: 2.3522
    }
  },
  {
    id: 5,
    name: 'Serengeti',
    slug: 'serengeti-tanzania',
    country: 'Tanzania',
    continent: 'Africa',
    region: 'Northern Tanzania',
    imageUrl: '/images/destinations/serengeti.jpg',
    imageAlt: 'African savanna with acacia trees and wildlife in the Serengeti, Tanzania',
    description: 'Famous for its annual migration of wildebeest and zebra, and abundance of wildlife in a spectacular savanna setting.',
    longDescription: 'The Serengeti ecosystem is a geographical region in Africa, spanning northern Tanzania. The protected area within the region includes approximately 30,000 km² of land, including the Serengeti National Park and several game reserves. The Serengeti hosts the second largest terrestrial mammal migration in the world, which helps secure it as one of the Seven Natural Wonders of Africa and one of the ten natural travel wonders of the world.',
    highlights: [
      'Witness the Great Migration of wildebeest and zebra',
      'Spot the Big Five (lion, leopard, elephant, buffalo, rhino)',
      'Take a hot air balloon safari at dawn',
      'Visit a Maasai village',
      'Camp under the stars in the savanna'
    ],
    activities: [
      'Game drives to spot the Big Five',
      'Hot air balloon safari at sunrise',
      'Walking safaris with expert guides',
      'Cultural visits to Maasai villages',
      'Photography safaris',
      'Camping in the wilderness',
      'Bird watching for over 500 species'
    ],
    tags: ['Safari', 'Wildlife', 'Nature', 'Adventure', 'Photography'],
    rating: 4.9,
    bestTimeToVisit: 'June to October (dry season and migration)',
    budget: 'High',
    coordinates: {
      lat: -2.3333,
      lng: 34.8333
    }
  },
  {
    id: 6,
    name: 'Machu Picchu',
    slug: 'machu-picchu-peru',
    country: 'Peru',
    continent: 'South America',
    region: 'Cusco Region',
    imageUrl: '/images/destinations/machu-picchu.jpg',
    imageAlt: 'Ancient Incan citadel of Machu Picchu in the Andes Mountains, Peru',
    description: 'The iconic Incan citadel set high in the Andes Mountains, known for its sophisticated dry-stone walls and astronomical alignments.',
    longDescription: 'Machu Picchu is an Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley. Built in the 15th century and later abandoned, it is renowned for its sophisticated dry-stone walls that fuse huge blocks without the use of mortar, intriguing buildings that play on astronomical alignments and panoramic views. Its exact former use remains a mystery.',
    highlights: [
      'Explore the ancient stone structures',
      'Hike the Inca Trail to reach the site',
      'See the Temple of the Sun',
      'Climb Huayna Picchu for panoramic views',
      'Learn about Incan culture and history'
    ],
    activities: [
      'Hiking the classic Inca Trail (4-day trek)',
      'Taking the train from Cusco to Aguas Calientes',
      'Climbing Huayna Picchu mountain for stunning views',
      'Guided tours of the ancient citadel',
      'Exploring the Sacred Valley',
      'Visiting nearby hot springs in Aguas Calientes'
    ],
    tags: ['Historic', 'Cultural', 'Adventure', 'UNESCO', 'Hiking'],
    rating: 4.8,
    bestTimeToVisit: 'April to October (dry season)',
    budget: 'Medium to High',
    coordinates: {
      lat: -13.1631,
      lng: -72.5450
    }
  }
];

/**
 * Get all available destinations
 */
export function getAllDestinations(): Destination[] {
  return destinations;
}

/**
 * Get a specific destination by slug
 */
export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(destination => destination.slug === slug);
}

/**
 * Get destinations filtered by continent
 */
export function getDestinationsByContinent(continent: string): Destination[] {
  return destinations.filter(destination => destination.continent === continent);
}

/**
 * Get all unique continents
 */
export function getAllContinents(): string[] {
  const continents = destinations.map(destination => destination.continent);
  return Array.from(new Set(continents));
}

/**
 * Get destinations filtered by tags
 */
export function getDestinationsByTags(tags: string[]): Destination[] {
  return destinations.filter(destination => 
    tags.some(tag => destination.tags.includes(tag))
  );
}
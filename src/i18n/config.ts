import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// English translations
const enTranslations = {
  nav: {
    home: 'Home',
    destinations: 'Destinations',
    blog: 'Blog',
    about: 'About Us',
    contact: 'Contact'
  },
  about: {
    seo: {
      title: 'About Us | Travel Recommender',
      description: 'Learn about the team behind Travel Recommender and our mission to help travelers find their perfect destinations.',
      keywords: 'about us, travel recommender, travel experts, destination guides, travel company'
    },
    title: 'About Us',
    subtitle: 'Meet the team behind Travel Recommender and learn about our mission.',
    mission: {
      title: 'Our Mission',
      content: 'At Travel Recommender, our mission is to help travelers discover their perfect destinations and make their travel planning experience as smooth as possible. We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories.',
      content2: "We curate detailed destination guides, share practical travel tips, and provide exclusive deals to ensure you get the most out of your travels. Whether you're a seasoned globetrotter or planning your first adventure, we're here to help you every step of the way."
    },
    story: {
      title: 'Our Story',
      content: 'Travel Recommender was founded in 2023 by a group of passionate travelers who were frustrated with the overwhelming amount of information available online and the difficulty of finding reliable, personalized travel recommendations.',
      content2: 'What started as a small blog has grown into a comprehensive travel resource trusted by thousands of travelers worldwide. Our team has expanded to include travel experts from different backgrounds, all united by their love for exploration and commitment to helping others discover the world.'
    },
    team: {
      title: 'Our Team',
      intro: 'Meet the passionate travelers behind Travel Recommender. Our diverse team brings together expertise in travel, technology, and content creation.',
      founder: 'Founder & Travel Expert',
      contentDirector: 'Content Director',
      techLead: 'Tech Lead',
      michaelBio: 'World traveler with over 50 countries visited. Former digital nomad and passionate about sustainable tourism.',
      sophiaBio: 'Award-winning travel writer and photographer. Specializes in cultural experiences and off-the-beaten-path destinations.',
      jamesBio: 'Software engineer and travel tech enthusiast. Ensures Travel Recommender provides a seamless user experience.'
    },
    values: {
      title: 'Our Values',
      authenticity: 'Authenticity:',
      authenticityDesc: 'We share honest and unbiased travel information, including both the highlights and challenges of each destination.',
      sustainability: 'Sustainability:',
      sustainabilityDesc: 'We promote responsible tourism and provide information on eco-friendly travel options.',
      inclusion: 'Inclusion:',
      inclusionDesc: 'We believe travel is for everyone and strive to provide diverse perspectives and resources for all types of travelers.',
      quality: 'Quality:',
      qualityDesc: 'We are committed to providing well-researched, accurate, and up-to-date travel information.'
    }
  },
  destinations: {
    seo: {
      title: 'Explore Destinations | Travel Recommender',
      description: 'Discover amazing travel destinations around the world with guides, tips, and exclusive deals.',
      keywords: 'travel destinations, vacation spots, travel guide, tourism, international travel'
    },
    title: 'Explore Destinations',
    subtitle: 'Discover amazing travel destinations around the world with guides, tips, and exclusive deals.'
  },
  blog: {
    seo: {
      title: 'Travel Blog | Travel Recommender',
      description: 'Explore our collection of travel guides, tips, and destination insights to plan your perfect trip.',
      keywords: 'travel blog, travel guides, travel tips, destination guides, trip planning'
    },
    title: 'Travel Blog',
    subtitle: 'Explore our collection of travel guides, tips, and destination insights.',
    readMore: 'Read More',
    relatedPosts: 'You May Also Like'
  },
  newsletter: {
    title: 'Subscribe to Our Newsletter',
    description: 'Get the latest travel tips, destination guides, and exclusive deals delivered straight to your inbox.',
    placeholder: 'Your email address',
    button: 'Subscribe',
    invalidEmail: 'Please enter a valid email address.',
    success: 'Thank you for subscribing to our newsletter!'
  },
  notFound: {
    message: 'The page you are looking for does not exist or has been moved.',
    backHome: 'Back to Home'
  },
  footer: {
    companyName: 'Travel Recommender',
    tagline: 'Finding your perfect destination since 2023.',
    exploreTitle: 'Explore',
    companyTitle: 'Company',
    legalTitle: 'Legal',
    destinations: {
      europe: 'Europe',
      asia: 'Asia',
      americas: 'Americas',
      africa: 'Africa',
      oceania: 'Oceania'
    },
    companyLinks: {
      about: 'About Us',
      blog: 'Blog',
      careers: 'Careers',
      press: 'Press'
    },
    legal: {
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy'
    },
    copyright: '© {year} Travel Recommender. All rights reserved.'
  }
};

// Spanish translations
const esTranslations = {
  nav: {
    home: 'Inicio',
    destinations: 'Destinos',
    blog: 'Blog',
    about: 'Nosotros',
    contact: 'Contacto'
  },
  about: {
    seo: {
      title: 'Sobre Nosotros | Travel Recommender',
      description: 'Conozca al equipo detrás de Travel Recommender y nuestra misión de ayudar a los viajeros a encontrar sus destinos perfectos.',
      keywords: 'sobre nosotros, recomendador de viajes, expertos en viajes, guías de destino, empresa de viajes'
    },
    title: 'Sobre Nosotros',
    subtitle: 'Conozca al equipo detrás de Travel Recommender y aprenda sobre nuestra misión.',
    mission: {
      title: 'Nuestra Misión',
      content: 'En Travel Recommender, nuestra misión es ayudar a los viajeros a descubrir sus destinos perfectos y hacer que su experiencia de planificación de viajes sea lo más fluida posible. Creemos que los viajes tienen el poder de transformar vidas, ampliar perspectivas y crear recuerdos duraderos.',
      content2: "Seleccionamos guías detalladas de destinos, compartimos consejos prácticos de viaje y ofrecemos ofertas exclusivas para garantizar que aproveche al máximo sus viajes. Ya sea un viajero experimentado o esté planeando su primera aventura, estamos aquí para ayudarlo en cada paso del camino."
    },
    story: {
      title: 'Nuestra Historia',
      content: 'Travel Recommender fue fundado en 2023 por un grupo de viajeros apasionados que estaban frustrados con la abrumadora cantidad de información disponible en línea y la dificultad de encontrar recomendaciones de viaje confiables y personalizadas.',
      content2: 'Lo que comenzó como un pequeño blog se ha convertido en un recurso de viaje completo en el que confían miles de viajeros en todo el mundo. Nuestro equipo se ha expandido para incluir expertos en viajes de diferentes orígenes, todos unidos por su amor por la exploración y su compromiso de ayudar a otros a descubrir el mundo.'
    },
    team: {
      title: 'Nuestro Equipo',
      intro: 'Conozca a los viajeros apasionados detrás de Travel Recommender. Nuestro diverso equipo reúne experiencia en viajes, tecnología y creación de contenido.',
      founder: 'Fundador y Experto en Viajes',
      contentDirector: 'Director de Contenido',
      techLead: 'Líder Técnico',
      michaelBio: 'Viajero mundial con más de 50 países visitados. Ex nómada digital y apasionado por el turismo sostenible.',
      sophiaBio: 'Escritora y fotógrafa de viajes galardonada. Se especializa en experiencias culturales y destinos fuera de lo común.',
      jamesBio: 'Ingeniero de software y entusiasta de la tecnología de viajes. Garantiza que Travel Recommender proporcione una experiencia de usuario perfecta.'
    },
    values: {
      title: 'Nuestros Valores',
      authenticity: 'Autenticidad:',
      authenticityDesc: 'Compartimos información de viaje honesta e imparcial, incluidos tanto los aspectos destacados como los desafíos de cada destino.',
      sustainability: 'Sostenibilidad:',
      sustainabilityDesc: 'Promovemos el turismo responsable y proporcionamos información sobre opciones de viaje ecológicas.',
      inclusion: 'Inclusión:',
      inclusionDesc: 'Creemos que los viajes son para todos y nos esforzamos por proporcionar perspectivas y recursos diversos para todo tipo de viajeros.',
      quality: 'Calidad:',
      qualityDesc: 'Estamos comprometidos a proporcionar información de viaje bien investigada, precisa y actualizada.'
    }
  },
  destinations: {
    seo: {
      title: 'Explorar Destinos | Travel Recommender',
      description: 'Descubre destinos de viaje increíbles en todo el mundo con guías, consejos y ofertas exclusivas.',
      keywords: 'destinos de viaje, lugares de vacaciones, guía de viaje, turismo, viajes internacionales'
    },
    title: 'Explorar Destinos',
    subtitle: 'Descubre destinos de viaje increíbles en todo el mundo con guías, consejos y ofertas exclusivas.'
  },
  blog: {
    seo: {
      title: 'Blog de Viajes | Travel Recommender',
      description: 'Explora nuestra colección de guías de viaje, consejos y perspectivas de destinos para planificar tu viaje perfecto.',
      keywords: 'blog de viajes, guías de viaje, consejos de viaje, guías de destino, planificación de viajes'
    },
    title: 'Blog de Viajes',
    subtitle: 'Explora nuestra colección de guías de viaje, consejos y perspectivas de destinos.',
    readMore: 'Leer Más',
    relatedPosts: 'También Te Puede Gustar'
  },
  newsletter: {
    title: 'Suscríbete a Nuestro Boletín',
    description: 'Recibe los últimos consejos de viaje, guías de destino y ofertas exclusivas directamente en tu bandeja de entrada.',
    placeholder: 'Tu dirección de correo electrónico',
    button: 'Suscribirse',
    invalidEmail: 'Por favor, introduce una dirección de correo electrónico válida.',
    success: '¡Gracias por suscribirte a nuestro boletín!'
  },
  notFound: {
    message: 'La página que estás buscando no existe o ha sido movida.',
    backHome: 'Volver al Inicio'
  },
  footer: {
    companyName: 'Travel Recommender',
    tagline: 'Encontrando tu destino perfecto desde 2023.',
    exploreTitle: 'Explorar',
    companyTitle: 'Compañía',
    legalTitle: 'Legal',
    destinations: {
      europe: 'Europa',
      asia: 'Asia',
      americas: 'América',
      africa: 'África',
      oceania: 'Oceanía'
    },
    companyLinks: {
      about: 'Nosotros',
      blog: 'Blog',
      careers: 'Carreras',
      press: 'Prensa'
    },
    legal: {
      terms: 'Términos de Servicio',
      privacy: 'Política de Privacidad',
      cookies: 'Política de Cookies'
    },
    copyright: '© {year} Travel Recommender. Todos los derechos reservados.'
  }
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations }
    },
    lng: localStorage.getItem('preferredLanguage') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
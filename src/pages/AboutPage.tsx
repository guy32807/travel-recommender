import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import Image from '../components/Image';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1rem;
`;

const MemberName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const MemberTitle = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.75rem;
`;

const MemberBio = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
`;

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  
  // Fix: Convert potentially null translations to strings
  const seoTitle = t('about.seo.title', 'About Us | Travel Recommender') as string;
  const seoDescription = t('about.seo.description', 'Learn about the team behind Travel Recommender and our mission to help travelers find their perfect destinations.') as string;
  const seoKeywords = t('about.seo.keywords', 'about us, travel recommender, travel experts, destination guides, travel company') as string;
  
  return (
    <>
      <SEO 
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
      />
      
      <Container>
        <Title>{t('about.title', 'About Us')}</Title>
        <Subtitle>{t('about.subtitle', 'Meet the team behind Travel Recommender and learn about our mission.')}</Subtitle>
        
        <Section>
          <SectionTitle>{t('about.mission.title', 'Our Mission')}</SectionTitle>
          <p>{t('about.mission.content', 'At Travel Recommender, our mission is to help travelers discover their perfect destinations and make their travel planning experience as smooth as possible. We believe that travel has the power to transform lives, broaden perspectives, and create lasting memories.')}</p>
          <p>{t('about.mission.content2', "We curate detailed destination guides, share practical travel tips, and provide exclusive deals to ensure you get the most out of your travels. Whether you're a seasoned globetrotter or planning your first adventure, we're here to help you every step of the way.")}</p>
        </Section>
        
        <Section>
          <SectionTitle>{t('about.story.title', 'Our Story')}</SectionTitle>
          <p>{t('about.story.content', 'Travel Recommender was founded in 2023 by a group of passionate travelers who were frustrated with the overwhelming amount of information available online and the difficulty of finding reliable, personalized travel recommendations.')}</p>
          <p>{t('about.story.content2', 'What started as a small blog has grown into a comprehensive travel resource trusted by thousands of travelers worldwide. Our team has expanded to include travel experts from different backgrounds, all united by their love for exploration and commitment to helping others discover the world.')}</p>
        </Section>
        
        <Section>
          <SectionTitle>{t('about.team.title', 'Our Team')}</SectionTitle>
          <p>{t('about.team.intro', 'Meet the passionate travelers behind Travel Recommender. Our diverse team brings together expertise in travel, technology, and content creation.')}</p>
          
          <TeamGrid>
            <TeamMember>
              <Avatar>
                <Image 
                  src="/images/team/michael.jpg" 
                  alt="Michael Chen" 
                  fallbackSrc="/images/placeholder-profile.jpg"
                />
              </Avatar>
              <MemberName>Michael Chen</MemberName>
              <MemberTitle>{t('about.team.founder', 'Founder & Travel Expert')}</MemberTitle>
              <MemberBio>{t('about.team.michaelBio', 'World traveler with over 50 countries visited. Former digital nomad and passionate about sustainable tourism.')}</MemberBio>
            </TeamMember>
            
            <TeamMember>
              <Avatar>
                <Image 
                  src="/images/team/sophia.jpg" 
                  alt="Sophia Rodriguez" 
                  fallbackSrc="/images/placeholder-profile.jpg"
                />
              </Avatar>
              <MemberName>Sophia Rodriguez</MemberName>
              <MemberTitle>{t('about.team.contentDirector', 'Content Director')}</MemberTitle>
              <MemberBio>{t('about.team.sophiaBio', 'Award-winning travel writer and photographer. Specializes in cultural experiences and off-the-beaten-path destinations.')}</MemberBio>
            </TeamMember>
            
            <TeamMember>
              <Avatar>
                <Image 
                  src="/images/team/james.jpg" 
                  alt="James Wilson" 
                  fallbackSrc="/images/placeholder-profile.jpg"
                />
              </Avatar>
              <MemberName>James Wilson</MemberName>
              <MemberTitle>{t('about.team.techLead', 'Tech Lead')}</MemberTitle>
              <MemberBio>{t('about.team.jamesBio', 'Software engineer and travel tech enthusiast. Ensures Travel Recommender provides a seamless user experience.')}</MemberBio>
            </TeamMember>
          </TeamGrid>
        </Section>
        
        <Section>
          <SectionTitle>{t('about.values.title', 'Our Values')}</SectionTitle>
          <p>
            <strong>{t('about.values.authenticity', 'Authenticity:')}</strong> {t('about.values.authenticityDesc', 'We share honest and unbiased travel information, including both the highlights and challenges of each destination.')}
          </p>
          <p>
            <strong>{t('about.values.sustainability', 'Sustainability:')}</strong> {t('about.values.sustainabilityDesc', 'We promote responsible tourism and provide information on eco-friendly travel options.')}
          </p>
          <p>
            <strong>{t('about.values.inclusion', 'Inclusion:')}</strong> {t('about.values.inclusionDesc', 'We believe travel is for everyone and strive to provide diverse perspectives and resources for all types of travelers.')}
          </p>
          <p>
            <strong>{t('about.values.quality', 'Quality:')}</strong> {t('about.values.qualityDesc', 'We are committed to providing well-researched, accurate, and up-to-date travel information.')}
          </p>
        </Section>
      </Container>
    </>
  );
};

export default AboutPage;
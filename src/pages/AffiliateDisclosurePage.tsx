import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--text-color, #333);
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const AffiliateDisclosurePage: React.FC = () => {
  const { t } = useTranslation();
  const lastUpdated = "May 1, 2025";
  
  return (
    <>
      <SEO 
        title={t('affiliateDisclosure.seo.title', 'Affiliate Disclosure | Travel Recommender')}
        description={t('affiliateDisclosure.seo.description', 'Our affiliate disclosure explains how we make money and maintain the quality of our content.')}
      />
      
      <Container>
        <Title>{t('affiliateDisclosure.title', 'Affiliate Disclosure')}</Title>
        <p><em>{t('affiliateDisclosure.lastUpdated', 'Last Updated')}: {lastUpdated}</em></p>
        
        <Section>
          <Paragraph>
            {t('affiliateDisclosure.intro', 'This page explains our affiliate relationships and how we make money while maintaining the quality and integrity of our content.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('affiliateDisclosure.whatAre.title', 'What Are Affiliate Links?')}</SectionTitle>
          <Paragraph>
            {t('affiliateDisclosure.whatAre.content', 'Affiliate links are special URLs that contain tracking codes. When you click on these links and make a purchase, we may earn a commission from the company, at no additional cost to you. These commissions help us maintain and improve Travel Recommender and continue providing free, high-quality travel content.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('affiliateDisclosure.ourPartners.title', 'Our Affiliate Partners')}</SectionTitle>
          <Paragraph>
            {t('affiliateDisclosure.ourPartners.content', 'We currently have affiliate partnerships with the following companies:')}
          </Paragraph>
          <ul>
            <li>Trip.com</li>
            <li>Booking.com</li>
            <li>Expedia</li>
            <li>GetYourGuide</li>
            <li>Amazon</li>
            <li>World Nomads Travel Insurance</li>
          </ul>
          <Paragraph>
            {t('affiliateDisclosure.ourPartners.content2', 'This list may change as we form new partnerships or end existing ones.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('affiliateDisclosure.ourCommitment.title', 'Our Commitment to You')}</SectionTitle>
          <Paragraph>
            {t('affiliateDisclosure.ourCommitment.content', 'We want to be completely transparent about how we make money. Here\'s our promise to you:')}
          </Paragraph>
          <ul>
            <li>{t('affiliateDisclosure.ourCommitment.point1', 'We only recommend products and services we genuinely believe in and would use ourselves.')}</li>
            <li>{t('affiliateDisclosure.ourCommitment.point2', 'Our content and recommendations are not influenced by our affiliate partnerships.')}</li>
            <li>{t('affiliateDisclosure.ourCommitment.point3', 'We will clearly identify sponsored content or posts that were created as part of a paid partnership.')}</li>
            <li>{t('affiliateDisclosure.ourCommitment.point4', 'We will always prioritize providing accurate and helpful information over making a commission.')}</li>
          </ul>
        </Section>
        
        <Section>
          <SectionTitle>{t('affiliateDisclosure.identification.title', 'How We Identify Affiliate Links')}</SectionTitle>
          <Paragraph>
            {t('affiliateDisclosure.identification.content', 'We include this disclosure page to inform you about our affiliate partnerships. In addition, we may include specific disclaimers near affiliate links or at the beginning of articles containing affiliate links.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('affiliateDisclosure.questions.title', 'Questions About Our Affiliate Relationships?')}</SectionTitle>
          <Paragraph>
            {t('affiliateDisclosure.questions.content', 'If you have any questions about our affiliate relationships or how we use affiliate links, please don\'t hesitate to contact us at:')}
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> affiliates@travel-recommender.com
          </Paragraph>
        </Section>
        
        <Section>
          <Paragraph>
            {t('affiliateDisclosure.conclusion', 'Thank you for your support, which helps us continue providing free travel content and resources.')}
          </Paragraph>
        </Section>
      </Container>
    </>
  );
};

export default AffiliateDisclosurePage;
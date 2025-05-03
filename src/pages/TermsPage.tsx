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

const SubsectionTitle = styled.h3`
  font-size: 1.2rem;
  margin: 1.5rem 0 0.75rem;
  color: var(--text-color, #333);
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TermsPage: React.FC = () => {
  const { t } = useTranslation();
  const lastUpdated = "May 1, 2025";
  
  return (
    <>
      <SEO 
        title={t('terms.seo.title', 'Terms of Service | Travel Recommender')}
        description={t('terms.seo.description', 'Please read our terms of service before using Travel Recommender.')}
      />
      
      <Container>
        <Title>{t('terms.title', 'Terms of Service')}</Title>
        <p><em>{t('terms.lastUpdated', 'Last Updated')}: {lastUpdated}</em></p>
        
        <Section>
          <Paragraph>
            {t('terms.intro', 'Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Travel Recommender website operated by our team ("us", "we", or "our").')}
          </Paragraph>
          <Paragraph>
            {t('terms.intro2', 'Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.')}
          </Paragraph>
          <Paragraph>
            <strong>{t('terms.intro3', 'By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.')}</strong>
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('terms.contentAndLicensing.title', 'Content and Licensing')}</SectionTitle>
          <Paragraph>
            {t('terms.contentAndLicensing.content1', 'Our Service allows you to access content provided by Travel Recommender. The content on our website is owned by or licensed to Travel Recommender and is subject to copyright and other intellectual property rights under United States and foreign laws and international conventions.')}
          </Paragraph>
          <Paragraph>
            {t('terms.contentAndLicensing.content2', 'Unless otherwise specified, you are permitted to access our content for personal, non-commercial use only. You may not copy, reproduce, distribute, transmit, display, sell, license, or otherwise exploit any content for any other purposes without our prior written consent.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('terms.links.title', 'Links To Other Websites')}</SectionTitle>
          <Paragraph>
            {t('terms.links.content1', 'Our Service may contain links to third-party websites or services that are not owned or controlled by Travel Recommender.')}
          </Paragraph>
          <Paragraph>
            {t('terms.links.content2', 'Travel Recommender has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that Travel Recommender shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.')}
          </Paragraph>
          <Paragraph>
            {t('terms.links.content3', 'We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('terms.termination.title', 'Termination')}</SectionTitle>
          <Paragraph>
            {t('terms.termination.content', 'We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('terms.disclaimer.title', 'Disclaimer')}</SectionTitle>
          <Paragraph>
            <strong>{t('terms.disclaimer.content', 'THE SERVICE AND ITS CONTENT ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF PERFORMANCE.')}</strong>
          </Paragraph>
          <Paragraph>
            {t('terms.disclaimer.content2', 'Travel Recommender does not warrant that a) the Service will function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.')}
          </Paragraph>
          <Paragraph>
            {t('terms.disclaimer.travelAdvice', 'The travel information provided through our Service is for general informational purposes only. While we strive to provide accurate and up-to-date information, travel conditions can change rapidly. We recommend checking official sources and local authorities for the most current travel information before planning your trip.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('terms.limitation.title', 'Limitation of Liability')}</SectionTitle>
          <Paragraph>
            <strong>{t('terms.limitation.content', 'IN NO EVENT SHALL TRAVEL RECOMMENDER, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.')}</strong>
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('terms.governing.title', 'Governing Law')}</SectionTitle>
          <Paragraph>
            {t('terms.governing.content', 'These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.')}
          </Paragraph>
          <Paragraph>
            {t('terms.governing.content2', 'Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('terms.changes.title', 'Changes')}</SectionTitle>
          <Paragraph>
            {t('terms.changes.content', 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('terms.contact.title', 'Contact Us')}</SectionTitle>
          <Paragraph>
            {t('terms.contact.content', 'If you have any questions about these Terms, please contact us at:')}
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> legal@travel-recommender.com
          </Paragraph>
        </Section>
      </Container>
    </>
  );
};

export default TermsPage;
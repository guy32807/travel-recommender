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

const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();
  const lastUpdated = "May 1, 2025";
  
  return (
    <>
      <SEO 
        title={t('privacy.seo.title', 'Privacy Policy | Travel Recommender')}
        description={t('privacy.seo.description', 'Learn about how we collect, use, and protect your personal information.')}
      />
      
      <Container>
        <Title>{t('privacy.title', 'Privacy Policy')}</Title>
        <p><em>{t('privacy.lastUpdated', 'Last Updated')}: {lastUpdated}</em></p>
        
        <Section>
          <Paragraph>
            {t('privacy.intro', 'At Travel Recommender, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.')}
          </Paragraph>
          <Paragraph>
            {t('privacy.intro2', 'Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('privacy.collection.title', 'Information We Collect')}</SectionTitle>
          
          <SubsectionTitle>{t('privacy.collection.personal.title', 'Personal Information')}</SubsectionTitle>
          <Paragraph>
            {t('privacy.collection.personal.content', 'We may collect personal identification information from you in a variety of ways, including, but not limited to, when you visit our site, register on the site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features, or resources we make available on our site. You may be asked for, as appropriate, your name and email address.')}
          </Paragraph>
          <Paragraph>
            {t('privacy.collection.personal.content2', 'We will collect personal identification information from you only if you voluntarily submit such information to us. You can visit the site anonymously. You can always refuse to supply personal identification information, except that it may prevent you from engaging in certain site-related activities.')}
          </Paragraph>
          
          <SubsectionTitle>{t('privacy.collection.nonPersonal.title', 'Non-Personal Information')}</SubsectionTitle>
          <Paragraph>
            {t('privacy.collection.nonPersonal.content', 'We may collect non-personal identification information about you whenever you interact with our site. Non-personal identification information may include the browser name, the type of computer, technical information about your means of connection to our site, such as the operating system and the Internet service providers utilized, and other similar information.')}
          </Paragraph>
          
          <SubsectionTitle>{t('privacy.collection.cookies.title', 'Cookies')}</SubsectionTitle>
          <Paragraph>
            {t('privacy.collection.cookies.content', 'Our website uses cookies to enhance user experience. A cookie is a small piece of text that our web server stores on your computer or mobile device, which your browser sends to us when you return to our site. Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies.')}
          </Paragraph>
          <Paragraph>
            {t('privacy.collection.cookies.content2', 'You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site, and some services and functionalities may not work.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('privacy.use.title', 'How We Use Your Information')}</SectionTitle>
          <Paragraph>
            {t('privacy.use.content', 'We may use the information we collect from you for the following purposes:')}
          </Paragraph>
          <ul>
            <li>{t('privacy.use.point1', 'To improve our website: We continually strive to improve our website offerings based on the information and feedback we receive from you.')}</li>
            <li>{t('privacy.use.point2', 'To personalize user experience: We may use information in the aggregate to understand how our users as a group use the services and resources provided on our site.')}</li>
            <li>{t('privacy.use.point3', 'To send periodic emails: We may use the email address to respond to inquiries, questions, and/or other requests. If you decide to opt-in to our mailing list, you will receive emails that may include company news, updates, related product or service information, etc.')}</li>
            <li>{t('privacy.use.point4', 'To run a promotion, contest, survey, or other site feature.')}</li>
          </ul>
        </Section>
        
        <Section>
          <SectionTitle>{t('privacy.protection.title', 'How We Protect Your Information')}</SectionTitle>
          <Paragraph>
            {t('privacy.protection.content', 'We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('privacy.sharing.title', 'Sharing Your Personal Information')}</SectionTitle>
          <Paragraph>
            {t('privacy.sharing.content', 'We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('privacy.thirdParty.title', 'Third-Party Websites')}</SectionTitle>
          <Paragraph>
            {t('privacy.thirdParty.content', 'You may find advertising or other content on our site that links to the sites and services of our partners, suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our site. In addition, these sites or services, including their content and links, may be constantly changing. These sites and services may have their own privacy policies and customer service policies. Browsing and interaction on any other website, including websites which have a link to our site, is subject to that website\'s own terms and policies.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('privacy.analytics.title', 'Google Analytics')}</SectionTitle>
          <Paragraph>
            {t('privacy.analytics.content', 'We use Google Analytics to analyze the use of our website. Google Analytics gathers information about website use by means of cookies. The information gathered is used to create reports about the use of our website. Google\'s privacy policy is available at: https://www.google.com/policies/privacy/')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('privacy.rights.title', 'Your Rights')}</SectionTitle>
          <Paragraph>
            {t('privacy.rights.content', 'You have the following rights with respect to your personal data:')}
          </Paragraph>
          <ul>
            <li>{t('privacy.rights.point1', 'The right to request a copy of your personal data which we hold about you.')}</li>
            <li>{t('privacy.rights.point2', 'The right to request that we correct any personal data if it is found to be inaccurate or out of date.')}</li>
            <li>{t('privacy.rights.point3', 'The right to request your personal data be erased where it is no longer necessary for us to retain such data.')}</li>
            <li>{t('privacy.rights.point4', 'The right to withdraw your consent to the processing at any time.')}</li>
            <li>{t('privacy.rights.point5', 'The right to lodge a complaint with a supervisory authority.')}</li>
          </ul>
        </Section>
        
        <Section>
          <SectionTitle>{t('privacy.changes.title', 'Changes to This Privacy Policy')}</SectionTitle>
          <Paragraph>
            {t('privacy.changes.content', 'Travel Recommender has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the top of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.')}
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>{t('privacy.contact.title', 'Contact Us')}</SectionTitle>
          <Paragraph>
            {t('privacy.contact.content', 'If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:')}
          </Paragraph>
          <Paragraph>
            <strong>Email:</strong> privacy@travel-recommender.com
          </Paragraph>
        </Section>
      </Container>
    </>
  );
};

export default PrivacyPage;
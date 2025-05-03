import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const SwitcherContainer = styled.div`
  margin-left: 1rem;
`;

const LanguageButton = styled.button<{ $active: boolean }>`
  background: ${props => props.$active ? '#0066cc' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#333'};
  border: 1px solid #0066cc;
  border-radius: 4px;
  padding: 4px 8px;
  margin-left: 8px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: ${props => props.$active ? '#0052a3' : '#e6f0ff'};
  }
  
  &:first-child {
    margin-left: 0;
  }
`;

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (language: string) => {
    console.log(`Changing language to: ${language}`);
    i18n.changeLanguage(language);
    localStorage.setItem('preferredLanguage', language);
  };
  
  return (
    <SwitcherContainer>
      <LanguageButton 
        $active={i18n.language === 'en'} 
        onClick={() => changeLanguage('en')}
      >
        EN
      </LanguageButton>
      <LanguageButton 
        $active={i18n.language === 'es'} 
        onClick={() => changeLanguage('es')}
      >
        ES
      </LanguageButton>
    </SwitcherContainer>
  );
};

export default LanguageSwitcher;
import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { getAffiliateLink } from '../constants/links';

interface SearchWidgetProps {
  defaultDestination?: string;
}

const WidgetContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const FormRow = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const FormGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color, #0066cc);
  color: white;
  padding: 0.9rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: var(--primary-dark, #0052a3);
  }
`;

const SearchWidget: React.FC<SearchWidgetProps> = ({ defaultDestination = '' }) => {
  const { t } = useTranslation();
  const [destination, setDestination] = useState(defaultDestination);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create URL parameters
    const params = new URLSearchParams();
    if (destination) params.append('destination', destination);
    if (checkIn) params.append('checkIn', checkIn);
    if (checkOut) params.append('checkOut', checkOut);
    if (guests) params.append('guests', guests);
    
    // Redirect to Trip.com with affiliate link and search parameters
    const searchUrl = `${getAffiliateLink('search_widget', 'hotel_search', destination || 'general')}&${params.toString()}`;
    window.open(searchUrl, '_blank');
  };
  
  // Get tomorrow's date for min check-in
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];
  
  // Get date 3 days from tomorrow for min check-out
  const minCheckOut = new Date(tomorrow);
  minCheckOut.setDate(minCheckOut.getDate() + 1);
  const minCheckOutStr = minCheckOut.toISOString().split('T')[0];
  
  return (
    <WidgetContainer>
      <Title>{t('search.title', 'Find Your Perfect Stay')}</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="destination">{t('search.destination', 'Destination')}</Label>
          <Input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder={t('search.destinationPlaceholder', 'City, region, or specific hotel')}
          />
        </FormGroup>
        
        <FormRow>
          <FormGroup>
            <Label htmlFor="check-in">{t('search.checkIn', 'Check-in')}</Label>
            <Input
              type="date"
              id="check-in"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={tomorrowStr}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="check-out">{t('search.checkOut', 'Check-out')}</Label>
            <Input
              type="date"
              id="check-out"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || minCheckOutStr}
              required
            />
          </FormGroup>
        </FormRow>
        
        <FormGroup>
          <Label htmlFor="guests">{t('search.guests', 'Guests')}</Label>
          <Select
            id="guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          >
            <option value="1">1 {t('search.guest', 'Guest')}</option>
            <option value="2">2 {t('search.guests', 'Guests')}</option>
            <option value="3">3 {t('search.guests', 'Guests')}</option>
            <option value="4">4 {t('search.guests', 'Guests')}</option>
            <option value="5">5+ {t('search.guests', 'Guests')}</option>
          </Select>
        </FormGroup>
        
        <SubmitButton type="submit">
          {t('search.searchButton', 'Search Hotels')}
        </SubmitButton>
      </Form>
    </WidgetContainer>
  );
};

export default SearchWidget;
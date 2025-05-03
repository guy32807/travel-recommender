import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  avatar?: string;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const DefaultAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--primary-light, #e6f0ff);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: var(--primary-color, #0066cc);
  font-weight: bold;
  font-size: 1.2rem;
`;

const UserInfo = styled.div`
  flex: 1;
`;

const Name = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const Location = styled.div`
  font-size: 0.9rem;
  color: var(--text-light, #666);
`;

const Rating = styled.div`
  color: var(--secondary-color, #ff6b00);
`;

const Comment = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: var(--text-color, #333);
`;

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  
  // Hardcoded testimonials for now - in a real app, this would come from a data file or API
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Thompson',
      location: 'London, UK',
      comment: t('testimonials.sarah', 'The travel recommendations were spot on! I found the perfect beach resort for my family vacation.'),
      rating: 5,
      avatar: '/images/testimonials/sarah.jpg'
    },
    {
      id: '2',
      name: 'Michael Chen',
      location: 'Toronto, Canada',
      comment: t('testimonials.michael', 'I saved over $300 on my hotel booking thanks to the exclusive deals on this site. Highly recommended!'),
      rating: 5
    },
    {
      id: '3',
      name: 'Elena Rodriguez',
      location: 'Barcelona, Spain',
      comment: t('testimonials.elena', 'The destination guides were incredibly helpful for planning my Europe trip. Detailed and accurate information.'),
      rating: 4
    }
  ];
  
  // Function to get initials for default avatar
  const getInitials = (name: string): string => {
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase();
  };
  
  // Function to render star rating
  const renderRating = (rating: number): string => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };
  
  return (
    <Container>
      {testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.id}>
          <Header>
            {testimonial.avatar ? (
              <Avatar>
                <img src={testimonial.avatar} alt={testimonial.name} />
              </Avatar>
            ) : (
              <DefaultAvatar>{getInitials(testimonial.name)}</DefaultAvatar>
            )}
            <UserInfo>
              <Name>{testimonial.name}</Name>
              <Location>{testimonial.location}</Location>
            </UserInfo>
            <Rating>{renderRating(testimonial.rating)}</Rating>
          </Header>
          <Comment>{testimonial.comment}</Comment>
        </TestimonialCard>
      ))}
    </Container>
  );
};

export default Testimonials;
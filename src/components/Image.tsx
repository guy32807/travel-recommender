import React, { useState } from 'react';
import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string;
  fallbackSrc?: string;
  className?: string;
}

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc = '/images/placeholder.jpg',
  className 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      console.log(`Image failed to load: ${src}, falling back to: ${fallbackSrc}`);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  return (
    <ImageContainer className={className}>
      <StyledImage 
        src={imgSrc} 
        alt={alt} 
        onError={handleError} 
      />
    </ImageContainer>
  );
};

export default Image;
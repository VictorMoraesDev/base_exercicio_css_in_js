import React from 'react';
import { HeroContainer, HeroOverlay, HeroContent, HeroTitle } from './styles';

const Hero = () => (
  <HeroContainer>
    <HeroOverlay />
    <HeroContent>
      <HeroTitle>Seja bem-vindo ao nosso site!</HeroTitle>
    </HeroContent>
  </HeroContainer>
);

export default Hero;

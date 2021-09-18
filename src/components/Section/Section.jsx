import React from 'react';

import { StyledSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title>{title}</Title>
      {children}
    </StyledSection>
  );
};

export { Section };

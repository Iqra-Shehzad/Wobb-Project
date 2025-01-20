import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Title>Discover Campaigns That Match Your Niche</Title>
        <Subtitle>Connect with brands, grow your audience, and get rewarded!</Subtitle>
        <SearchBar>
          <Input placeholder="Search campaigns (e.g., travel, tech, fashion)" />
          <SearchButton>Search</SearchButton>
        </SearchBar>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  color: white;
  padding: 6rem 2rem;
  text-align: center;

  @media (min-width: 768px) {
    padding: 8rem 2rem;
  }

  @media (min-width: 1200px) {
    padding: 10rem 4rem;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 3rem;
  }

  @media (min-width: 1200px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.8rem;
  }
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  width: 100%;
  border: none;
  border-radius: 4px;
  font-size: 1rem;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const SearchButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accentHover};
  }
`;

export default HeroSection;


import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Brand>Wobb</Brand>
        <Links>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <Link href="#">Privacy Policy</Link>
        </Links>
        <SocialIcons>
          <Icon href="#"><FaFacebook /></Icon>
          <Icon href="#"><FaTwitter /></Icon>
          <Icon href="#"><FaInstagram /></Icon>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Brand = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: white;
  font-size: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icon = styled.a`
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export default Footer;

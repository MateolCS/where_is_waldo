import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          Created by @MateoICS
          <FooterLink href="https://github.com/MateolCS">
            <Github />
          </FooterLink>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  position: absolute;
  bottom: 0;
  background-color: #ef8354;
  padding: 1rem 0;
`;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContent = styled.p`
  font-size: 1.5rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const FooterLink = styled.a`
  color: #fff;
`;

const Github = styled(FaGithub)`
  font-size: 2rem;
  color: #fff;

  &:hover {
    color: #4f5d75;
  }
`;

export default Footer;

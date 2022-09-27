import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Contianer>
        <HeaderTitle>Where is Waldo?</HeaderTitle>
      </Contianer>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  background-color: #ef8354;
  padding: 1rem 0;
`;

const Contianer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
`;

export default Header;

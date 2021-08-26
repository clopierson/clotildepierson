import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Navigation from "./navigation";

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SiteTitle = styled.h1`
  padding: 0px 20px;
  flex-shrink: 0;
`;

const NavContainer = styled.div`
  flex-grow: 1;
  padding: 0px 20px;
`;

const StyledLink = styled((props) => <Link {...props} />)`
  color: inherit;
  text-decoration: none;
  text-transform: capitalize;

  &:hover {
    text-decoration: none;
  }
  //text-transform: uppercase;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <SiteTitle>
        <StyledLink to="/">pierson's lab</StyledLink>
      </SiteTitle>
      <NavContainer>
        <Navigation />
      </NavContainer>
    </HeaderContainer>
  );
}

import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { COLORS, QUERIES } from '../theme/constants';

export const MenuItems = [
  {
    link: "/",
    name: "about",
  },
  {
    link: "/research",
    name: "research",
  },
  {
    link: "/teaching",
    name: "teaching",
  },
  {
    link: "/contact",
    name: "contact",
  },
];

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 16px;
`;

const MenuItem = styled.li`
  display: inline;
  margin-top: 16px;
`;

const StyledLink = styled((props) => <Link {...props} />)`
  color: inherit;
  text-decoration: none;
  text-transform: capitalize;
`;

export default function Navigation() {
  return (
    <NavContainer>
      {MenuItems.map((link) => (
        <MenuItem key={link.name}>
          <StyledLink to={link.link}>{link.name}</StyledLink>
        </MenuItem>
      ))}
    </NavContainer>
  );
}

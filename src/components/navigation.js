import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

export const MenuItems = [
  {
    link: "/",
    name: "home",
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
    link: "/people",
    name: "people",
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
`;

const MenuItem = styled.li`
  display: inline;
  padding: 0px 8px;
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

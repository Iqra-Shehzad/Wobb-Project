import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <Nav>
      <Logo>Wobb</Logo>
      <MenuIcon onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <Menu open={menuOpen}>
        <MenuItem>Home</MenuItem>
        <MenuItem>My Campaigns</MenuItem>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.ul`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.primary};
  padding: 1rem;
  position: absolute;
  top: 100%;
  right: 0;
  border-radius: 8px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    gap: 1.5rem;
    padding: 0;
    background: none;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export default Navbar;

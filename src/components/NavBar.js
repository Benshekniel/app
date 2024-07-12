import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { AppBar, Toolbar, IconButton, Typography, Switch } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
  margin: 0 10px;
`;

const NavBar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Landing Page
        </Typography>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/contact-us">Contact Us</StyledNavLink>
        <Switch checked={theme === 'dark'} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

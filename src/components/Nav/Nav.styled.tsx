import styled from 'styled-components';
import theme from '@/styles/theme';
import { NavLink as Link } from 'react-router-dom';

export const StyledNav = styled.nav`
  background-color: ${theme.gray};
  box-shadow: 0px 15px 18px -10px rgba(0, 0, 0, 0.25);
`;

export const StyledUl = styled.ul`
  padding: 1em;
  display: flex;
  justify-content: space-around;
`;

export const NavLink = styled(Link)`
  color: ${theme.accent};
  font-weight: bold;
`;

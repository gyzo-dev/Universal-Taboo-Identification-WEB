import { StyledNav, NavLink, StyledUl } from './Nav.styled';
import Container from '../ui/Container';

function Nav() {
  return (
    <StyledNav>
      <Container>
        <StyledUl>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/registration">REGISTRATION</NavLink>
          </li>
          <li>
            <NavLink to="/news">NEWS</NavLink>
          </li>
          <li>
            <NavLink to="/contact">CONTACT</NavLink>
          </li>
        </StyledUl>
      </Container>
    </StyledNav>
  );
}

export default Nav;

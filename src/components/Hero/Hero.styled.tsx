import HeroBg from '@/assets/hero-bg.png';
import styled from 'styled-components';
import theme from '@/styles/theme';

export const StyledHero = styled.div`
  min-height: 400px;
  background-image: url(${HeroBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  color: ${theme.accent};
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  & > h1 {
    font-family: 'Josefin Sans';
    font-size: 40px;
  }

  & > h3 {
    font-family: 'Vast Shadow';
    font-size: 24px;
  }

  hr {
    margin: 0.5em 0;
    border-bottom: 3px solid ${theme.accent};
  }

  & > p {
    color: #686868;
    font-size: 16px;
    letter-spacing: 1em;
  }
`;

import styled from 'styled-components';
import theme from '@/styles/theme';

import Container from '../ui/Container';

export const StyledHeader = styled.div`
  padding: 2em;
  background-color: ${theme.header};
`;

export const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  height: 80px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  font-weight: bold;

  & > div {
    display: flex;
    justify-content: center;
    gap: 0.25em;
  }
`;

export const Button = styled.button`
  min-width: 100px;
  background-color: ${theme.accent};
  color: white;
  padding: 0.5em 0.75em;
  border-radius: 20px;
  font-weight: inherit;
`;

export const BtnLogin = styled.button`
  font-weight: inherit;
  color: ${theme.accent};
`;

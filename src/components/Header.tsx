import logoPath from '@/assets/logo.svg';
import styled from 'styled-components';
import Container from './ui/Container';
import theme from '@/styles/theme';

function Header() {
  return (
    <StyledHeader>
      <Content>
        <Logo src={logoPath} alt="logo" />

        <ButtonContainer>
          <Button>SIGN UP</Button>
          <span> or </span>
          <Button> Login </Button>
        </ButtonContainer>
      </Content>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
  padding: 2em;
  background-color: ${theme.header};
`;

const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 80px;
`;

const ButtonContainer = styled.div``;

const Button = styled.button``;

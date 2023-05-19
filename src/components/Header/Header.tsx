import logoPath from '@/assets/logo.svg';
import {
  StyledHeader,
  Content,
  Logo,
  ButtonContainer,
  Button,
  BtnLogin,
} from './Header.styled';

function Header() {
  return (
    <StyledHeader>
      <Content>
        <Logo src={logoPath} alt="logo" />

        <ButtonContainer>
          <Button>SIGN UP</Button>
          <div>
            <p>or</p>
            <BtnLogin> Login </BtnLogin>
          </div>
        </ButtonContainer>
      </Content>
    </StyledHeader>
  );
}

export default Header;

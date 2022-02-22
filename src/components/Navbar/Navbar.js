import * as Styled from './Navbar.styled.js';
import logo from './../../images/tablic_logo_transparent_white.png'
import NavbarButton from './../UI/Buttons/NavbarButton'


const Header = () => {
   return (
      <Styled.Navbar>
         <Styled.Logo src={logo} />
         <Styled.ButtonWrapper>
            <NavbarButton>{'Нова Игра'}</NavbarButton>
            <NavbarButton>{'Правила'}</NavbarButton>
         </Styled.ButtonWrapper>
      </Styled.Navbar>
   );
}

export default Header;
// Нова Игра
// Правила
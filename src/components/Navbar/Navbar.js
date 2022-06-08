import React from 'react';
import * as Styled from './Navbar.styled.js';
import logo from './../../images/tablic_logo_transparent_white.png'
import NavbarButton from './../UI/Buttons/NavbarButton'
import { StoreContext } from './../../store/store'


const Header = () => {
   const store = React.useContext(StoreContext)

   return (
      <Styled.Navbar>
         <Styled.Logo src={logo} />
         <Styled.ButtonWrapper>
            <NavbarButton action={() => {store.startWindow = true}}>{'Нова Игра'}</NavbarButton>
         </Styled.ButtonWrapper>
      </Styled.Navbar>
   );
}

export default Header;
// Нова Игра
// Правила
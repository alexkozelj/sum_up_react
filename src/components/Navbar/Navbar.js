import React from 'react';
import * as Styled from './Navbar.styled.js';
import logo from './../../images/tablic_logo_transparent_white.png'
import NavbarButton from './../UI/Buttons/NavbarButton'
import { StoreContext } from './../../store/store'


const Header = () => {
   const store = React.useContext(StoreContext)

   const navbarButtonClickHandler = () => { 
      if (!store.disableNavbarButton) {
         store.startWindow = true
      }
   }

   return (
      <Styled.Navbar>
         <Styled.Logo src={logo} />
         <Styled.ButtonWrapper>
           {!store.startWindow && <NavbarButton action={navbarButtonClickHandler}>{'Нова Игра'}</NavbarButton>}
         </Styled.ButtonWrapper>
      </Styled.Navbar>
   );
}

export default Header;
// Нова Игра
// Правила
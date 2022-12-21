import React, { useState } from 'react';
import * as Styled from './NavbarButton.styled.js';
import { useObserver } from 'mobx-react'
import { StoreContext } from './../../../store/store'

const NavbarButton = (props) => {
   const store = React.useContext(StoreContext)
   // const [disable, setDisable] = useState(store.disableNavbarButton)

   return (
      <Styled.NavbarButton onClick={props.action} className="text-box" isDisabled={useObserver(() => store.disableNavbarButton)}>
         <a href="#" className="button1" >{props.children}</a>
      </Styled.NavbarButton>
   );
}

export default NavbarButton;

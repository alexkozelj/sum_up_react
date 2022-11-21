import * as Styled from './NavbarButton.styled.js';

const NavbarButton = (props) => {


   return (
      <Styled.NavbarButton onClick={props.action} className="text-box">
         <a href="#" className="button1">{props.children}</a>
      </Styled.NavbarButton>
   );
}

export default NavbarButton;

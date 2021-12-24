import * as Styled from './NavbarButton.styled.js';

const NavbarButton = (props) => {


   return (
      <Styled.NavbarButton className="text-box">
         <a href="#" className="btn btn-white btn-animate">{props.children}</a>
      </Styled.NavbarButton>
   );
}

export default NavbarButton;

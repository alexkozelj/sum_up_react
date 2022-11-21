import styled from "styled-components";

export const NavbarButton = styled.div`
   a.button1{
 display:inline-block;
 padding: 0.1em 1.4em;
 border:0.1em solid #FFFFFF;
 margin:0.3em 0.3em 0.3em 0;
 border-radius:0.35em;
 box-sizing: border-box;
 text-decoration:none;
 font-family:'Good time';
 font-weight:500;
 color: white;
 text-align:center;
 transition: all 0.2s;
 font-size: 15px;
 letter-spacing: 2px;
 background-color: #333333;

 @media (max-width: 440px) {
       margin:0.8em 0;
      padding: 2px 18px;
      font-size: 12px;
    }
}


a.button1:hover{
 color: white;
 background-color: #003366;
}

`;

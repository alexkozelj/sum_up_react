import styled from "styled-components";

export const NavbarButton = styled.div`

a.button1{
      opacity: ${props => props.isDisabled ? 0.3 : 1};
       display:inline-block;
       padding: 0.1em 1.4em;
      border: 3px solid #ddff30;
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
      /* background-color: #8B0000; */
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b4ddb4+0,83c783+3,52b152+10,008a00+20,008a00+20,008a00+21,008a00+23,005700+49,002400+100 */
      background: rgb(180,221,180); /* Old browsers */
      background: -moz-linear-gradient(top,  rgba(180,221,180,1) 0%, rgba(131,199,131,1) 3%, rgba(82,177,82,1) 10%, rgba(0,138,0,1) 20%, rgba(0,138,0,1) 20%, rgba(0,138,0,1) 21%, rgba(0,138,0,1) 23%, rgba(0,87,0,1) 49%, rgba(0,36,0,1) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  rgba(180,221,180,1) 0%,rgba(131,199,131,1) 3%,rgba(82,177,82,1) 10%,rgba(0,138,0,1) 20%,rgba(0,138,0,1) 20%,rgba(0,138,0,1) 21%,rgba(0,138,0,1) 23%,rgba(0,87,0,1) 49%,rgba(0,36,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom,  rgba(180,221,180,1) 0%,rgba(131,199,131,1) 3%,rgba(82,177,82,1) 10%,rgba(0,138,0,1) 20%,rgba(0,138,0,1) 20%,rgba(0,138,0,1) 21%,rgba(0,138,0,1) 23%,rgba(0,87,0,1) 49%,rgba(0,36,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4ddb4', endColorstr='#002400',GradientType=0 ); /* IE6-9 */


      @media (max-width: 440px) {
             margin:0.8em 0;
            padding: 2px 18px;
            font-size: 12px;
            border: 2px solid #ddff30;
         }
   }


   a.button1:hover{
       color: white;
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b4ddb4+0,83c783+3,52b152+4,52b152+4,008a00+15,008a00+15,005700+83,002400+100 */
      background: rgb(180,221,180); /* Old browsers */
      background: -moz-linear-gradient(top,  rgba(180,221,180,1) 0%, rgba(131,199,131,1) 3%, rgba(82,177,82,1) 4%, rgba(82,177,82,1) 4%, rgba(0,138,0,1) 15%, rgba(0,138,0,1) 15%, rgba(0,87,0,1) 83%, rgba(0,36,0,1) 100%); /* FF3.6-15 */
      background: -webkit-linear-gradient(top,  rgba(180,221,180,1) 0%,rgba(131,199,131,1) 3%,rgba(82,177,82,1) 4%,rgba(82,177,82,1) 4%,rgba(0,138,0,1) 15%,rgba(0,138,0,1) 15%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(to bottom,  rgba(180,221,180,1) 0%,rgba(131,199,131,1) 3%,rgba(82,177,82,1) 4%,rgba(82,177,82,1) 4%,rgba(0,138,0,1) 15%,rgba(0,138,0,1) 15%,rgba(0,87,0,1) 83%,rgba(0,36,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4ddb4', endColorstr='#002400',GradientType=0 ); /* IE6-9 */

   }

`;
